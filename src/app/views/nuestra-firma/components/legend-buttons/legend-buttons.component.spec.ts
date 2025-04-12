import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendButtonsComponent } from './legend-buttons.component';

describe('LegendButtonsComponent', () => {
  let component: LegendButtonsComponent;
  let fixture: ComponentFixture<LegendButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegendButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegendButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
