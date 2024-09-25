import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTeamComponent } from './button-team.component';

describe('ButtonTeamComponent', () => {
  let component: ButtonTeamComponent;
  let fixture: ComponentFixture<ButtonTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
