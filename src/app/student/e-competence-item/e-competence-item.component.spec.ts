import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECompetenceItemComponent } from './e-competence-item.component';

describe('ECompetenceItemComponent', () => {
  let component: ECompetenceItemComponent;
  let fixture: ComponentFixture<ECompetenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECompetenceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECompetenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
