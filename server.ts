import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import compression from 'compression'; // <-- Importa compression
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SitemapStream, streamToPromise } from 'sitemap';
import bootstrap from './src/main.server';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  // Usa el middleware de compresión
  server.use(compression());  // <-- Habilita la compresión para todas las respuestas

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });

  server.get('/robots.txt', (req, res) => {
    res.sendFile(join(serverDistFolder, 'robots.txt'));
  });

  server.get('/sitemap.xml', async (req, res) => {
    const sitemap = new SitemapStream({ hostname: 'https://abogadosdigitales.com.co/' });
    sitemap.write({ url: '/', lastmod: new Date(), changefreq: 'daily', priority: 1.0 });
    sitemap.end();

    try {
      const sitemapXml = await streamToPromise(sitemap);
      res.header('Content-Type', 'application/xml');
      res.send(sitemapXml.toString());
    } catch (err) {
      res.status(500).send('Error generating sitemap');
    }
  });

  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  server.get('/ngsw-worker.js', (req, res) => {
    res.sendFile(join(browserDistFolder, 'ngsw-worker.js'));
  });

  server.get('/ngsw.json', (req, res) => {
    res.sendFile(join(browserDistFolder, 'ngsw.json'));
  });

  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
