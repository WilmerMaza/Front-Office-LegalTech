import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderaLegalComponent } from './bandera-legal.component';

describe('BanderaLegalComponent', () => {
  let component: BanderaLegalComponent;
  let fixture: ComponentFixture<BanderaLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanderaLegalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanderaLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
