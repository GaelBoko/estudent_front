import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EExperiencesComponent } from './e-experiences.component';

describe('EExperiensComponent', () => {
  let component: EExperiencesComponent;
  let fixture: ComponentFixture<EExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
