import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEtablissementsComponent } from './l-etablissements.component';

describe('LEtablissementsComponent', () => {
  let component: LEtablissementsComponent;
  let fixture: ComponentFixture<LEtablissementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LEtablissementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LEtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
