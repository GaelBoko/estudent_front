import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllEtablissementsComponent } from './all-etablissements.component';

describe('AllEtablissementsComponent', () => {
  let component: AllEtablissementsComponent;
  let fixture: ComponentFixture<AllEtablissementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEtablissementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEtablissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
