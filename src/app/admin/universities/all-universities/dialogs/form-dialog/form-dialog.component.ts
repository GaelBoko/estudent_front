import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { UniversitiesService } from '../../universities.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Universities } from '../../universities.model';
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
  universities: Universities;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public universitiesService: UniversitiesService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.universities.name;
      this.universities = data.universities;
    } else {
      this.dialogTitle = 'New Universities';
      this.universities = new Universities({});
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
      id: [this.universities.id],
      img: [this.universities.img],
      name: [this.universities.name],
      email: [
        this.universities.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      date: [
        formatDate(this.universities.date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.universities.gender],
      mobile: [this.universities.mobile],
      department: [this.universities.cycle],
      rollNo: [this.universities.rollNo]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.universitiesService.addUniversities(this.stdForm.getRawValue());
  }
}
