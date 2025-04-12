import { TestBed } from '@angular/core/testing';

import { HtmlTranslateService } from './html-translate.service';

describe('HtmlTranslateService', () => {
  let service: HtmlTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
