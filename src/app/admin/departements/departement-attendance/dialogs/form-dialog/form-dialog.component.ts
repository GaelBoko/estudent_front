import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DepartementAttendanceService } from '../../attendance.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { DepartementAttendance } from '../../departement-attendance.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  departementAttendanceForm: UntypedFormGroup;
  departementAttendance: DepartementAttendance;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public departementAttendanceService: DepartementAttendanceService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      console.log(data.departementAttendance.date);
      this.dialogTitle = data.departementAttendance.sName;
      this.departementAttendance = data.departementAttendance;
    } else {
      this.dialogTitle = 'New Attendance';
      this.departementAttendance = new DepartementAttendance({});
    }
    this.departementAttendanceForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): UntypedFormGroup {
    console.log(this.departementAttendance.id);
    return this.fb.group({
      id: [this.departementAttendance.id],
      img: [this.departementAttendance.img],
      rollNo: [this.departementAttendance.rollNo, [Validators.required]],
      sName: [this.departementAttendance.sName, [Validators.required]],
      class: [this.departementAttendance.class, [Validators.required]],
      date: [
        formatDate(this.departementAttendance.date, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      status: [this.departementAttendance.status, [Validators.required]],
      note: [this.departementAttendance.note],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.departementAttendanceService.addDepartementAttendance(
      this.departementAttendanceForm.getRawValue()
    );
  }
}
