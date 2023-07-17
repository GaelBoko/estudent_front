import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogExpComponent } from './form-dialog-exp.component';

describe('FormDialogExpComponent', () => {
  let component: FormDialogExpComponent;
  let fixture: ComponentFixture<FormDialogExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDialogExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
