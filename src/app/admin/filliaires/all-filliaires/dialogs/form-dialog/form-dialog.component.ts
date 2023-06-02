import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DepartmentsService } from '../../departments.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Departments } from '../../departments.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  departments: Departments;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public departmentsService: DepartmentsService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.departments.name;
      this.departments = data.departments;
    } else {
      this.dialogTitle = 'New Departments';
      this.departments = new Departments({});
    }
    this.stdForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required
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
    return this.fb.group({
      id: [this.departments.id],
      img: [this.departments.img],
      name: [this.departments.name],
      email: [
        this.departments.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      date: [
        formatDate(this.departments.date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.departments.gender],
      mobile: [this.departments.mobile],
      department: [this.departments.department],
      rollNo: [this.departments.rollNo]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.departmentsService.addDepartments(this.stdForm.getRawValue());
  }
}
