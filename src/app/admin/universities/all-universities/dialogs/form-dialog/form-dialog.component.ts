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
    this.stdForm = this.createUniversiteForm();
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
  createUniversiteForm(): UntypedFormGroup {
    return this.fb.group({
      guid: [this.universities.guid],
      photo: [this.universities.photo],
      nom: [this.universities.nom],
      email: [
        this.universities.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      telephone: [this.universities.telephone],
      adress: [this.universities.adress]
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
