import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogCurComponent } from './form-dialog-cur.component';

describe('FormDialogCurComponent', () => {
  let component: FormDialogCurComponent;
  let fixture: ComponentFixture<FormDialogCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialogCurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDialogCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
