import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECompetence2ItemComponent } from './e-competence2-item.component';

describe('ECompetence2ItemComponent', () => {
  let component: ECompetence2ItemComponent;
  let fixture: ComponentFixture<ECompetence2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECompetence2ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECompetence2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
