import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlTranslateService {
  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) { }

  public getSanitizedHtml(key?: string): SafeHtml {
    const raw = key ? this.translate.instant(key) : '';
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }
}
