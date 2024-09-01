import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContactoComponent } from './button-contacto.component';

describe('ButtonContactoComponent', () => {
  let component: ButtonContactoComponent;
  let fixture: ComponentFixture<ButtonContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
