import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogCptComponent } from './form-dialog-cpt.component';

describe('FormDialogComponent', () => {
  let component: FormDialogCptComponent;
  let fixture: ComponentFixture<FormDialogCptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogCptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDialogCptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
