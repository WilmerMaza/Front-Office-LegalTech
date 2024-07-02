import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraFirmaComponent } from './nuestra-firma.component';

describe('NuestraFirmaComponent', () => {
  let component: NuestraFirmaComponent;
  let fixture: ComponentFixture<NuestraFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestraFirmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestraFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
