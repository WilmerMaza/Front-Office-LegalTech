import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNaviteComponent } from './carousel-navite.component';

describe('CarouselNaviteComponent', () => {
  let component: CarouselNaviteComponent;
  let fixture: ComponentFixture<CarouselNaviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselNaviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselNaviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
