import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTeamComponent } from './img-team.component';

describe('ImgTeamComponent', () => {
  let component: ImgTeamComponent;
  let fixture: ComponentFixture<ImgTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
