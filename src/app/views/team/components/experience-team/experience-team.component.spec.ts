import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTeamComponent } from './experience-team.component';

describe('ExperienceTeamComponent', () => {
  let component: ExperienceTeamComponent;
  let fixture: ComponentFixture<ExperienceTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
