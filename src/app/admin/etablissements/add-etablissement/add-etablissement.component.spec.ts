import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEtablissementComponent } from './add-etablissement.component';

describe('AddEtablissementComponent', () => {
  let component: AddEtablissementComponent;
  let fixture: ComponentFixture<AddEtablissementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEtablissementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
