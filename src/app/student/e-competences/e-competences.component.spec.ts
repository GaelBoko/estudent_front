import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECompetencesComponent } from './e-competences.component';

describe('ECompetencesComponent', () => {
  let component: ECompetencesComponent;
  let fixture: ComponentFixture<ECompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
