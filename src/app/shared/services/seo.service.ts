import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
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

        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ name: 'keywords', content: keywords });
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ name: 'twitter:title', content: title });
        this.metaService.updateTag({ name: 'twitter:description', content: description });



        // Inyectar JSON-LD solo en el navegador
        if (isPlatformBrowser(this.platformId)) {
          this.injectStructuredData(data['jsonLd'] || this.getDefaultJsonLd());
        }
      });
  }

  private injectStructuredData(jsonLd: Record<string, any>) {
    document.querySelectorAll('.ld-json').forEach((el) => el.remove());
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.classList.add('ld-json');
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }

  private getDefaultJsonLd(): Record<string, any> {
    return {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "LegalTech",
      "url": "https://abogadosdigitales.com.co",
      "logo": "https://abogadosdigitales.com.co/icons/icon-192x192.png",
      "description": "Firma de abogados digitales especializada en soluciones legales integradas con tecnología.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Boca Grande",
        "addressLocality": "Cartagena",
        "addressRegion": "Bolivar",
        "postalCode": "130001",
        "addressCountry": "CO"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+57-316-6912248",
        "contactType": "customer service",
        "areaServed": "CO",
        "availableLanguage": ["Spanish", "English"]
      },
      "sameAs": [
        "https://www.instagram.com/legaltechabogadosdigitales"
      ]
    };
  }
}