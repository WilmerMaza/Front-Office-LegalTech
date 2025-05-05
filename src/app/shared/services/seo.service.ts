import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'environment/environment';
import { IServiceSeo } from 'src/app/views/home/interface/interfaceService';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        const title = data['title'] || 'LegalTech';
        const description = data['description'] || '';
        const keywords = data['keywords'] || '';
        const jsonLd = data['jsonLd'] || this.getDefaultJsonLd();

        this.setMetaTags(title, description, keywords);

        if (isPlatformBrowser(this.platformId)) {
          this.injectStructuredData(jsonLd);
        }
      });
  }

  private setMetaTags(
    title: string,
    description: string,
    keywords: string
  ): void {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({
      name: 'twitter:description',
      content: description,
    });
  }

  public injectStructuredData(jsonLd: Record<string, any>) {
    document.querySelectorAll('.ld-json').forEach((el) => el.remove());
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.classList.add('ld-json');
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }

  public buildFaqSchema(
    faqs: { question: string; answer: string }[]
  ): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  private buildWebSiteSchema(): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${environment.url_legal}#website`,
      name: 'LegalTech',
      url: environment.url_legal,
      publisher: {
        '@type': 'Organization',
        name: 'LegalTech',
        logo: {
          '@type': 'ImageObject',
          url: `${environment.url_legal}/icons/icon-192x192.png`,
        },
      },
    };
  }

  private buildBreadcrumbSchema(
    breadcrumbs: { name: string; url: string }[]
  ): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  private buildServiceSchema(
    serviceName: string,
    description: string
  ): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: serviceName,
      provider: {
        '@type': 'LegalService',
        name: 'LegalTech',
        url: environment.url_legal,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Colombia',
      },
      description: description,
    };
  }

  public applySeoConfig(config: IServiceSeo, routeKey: string = ''): void {
    this.setMetaTags(config.title, config.description, config.keywords);

    const schemas: Record<string, any>[] = [];

    if (config.breadcrumb) {
      schemas.push(this.buildBreadcrumbSchema(config.breadcrumb));
    }

    if (config.serviceType) {
      schemas.push(
        this.buildServiceSchema(config.serviceType, config.description)
      );
    }

    if (config.faqs) {
      schemas.push(this.buildFaqSchema(config.faqs));
    }

    if (config.organization) {
      schemas.push(config.organization);
    }

    // Agrega el JSON-LD de tipo WebSite si estás en el home
    if (routeKey === 'home') {
      schemas.push(this.buildWebSiteSchema());
    }

    if (schemas.length > 0) {
      this.injectStructuredData(schemas.length === 1 ? schemas[0] : schemas);
    }
  }

  private getDefaultJsonLd(): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: 'LegalTech',
      url: environment.url_legal,
      logo: `${environment.url_legal}/icons/icon-192x192.png`,
      description:
        'Firma de abogados digitales especializada en soluciones legales integradas con tecnología.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Boca Grande',
        addressLocality: 'Cartagena',
        addressRegion: 'Bolivar',
        postalCode: '130001',
        addressCountry: 'CO',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+57-316-6912248',
        contactType: 'customer service',
        areaServed: 'CO',
        availableLanguage: ['Spanish', 'English'],
      },
      sameAs: ['https://www.instagram.com/legaltechabogadosdigitales'],
    };
  }
}
