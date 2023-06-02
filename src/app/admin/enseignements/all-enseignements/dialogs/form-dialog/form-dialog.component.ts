import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { formatDate } from '@angular/common';
import { DepartementsService } from 'src/app/admin/departements/all-departements/departements.service';
import { Departements } from 'src/app/admin/departements/all-departements/departements.model';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  departements: Departements;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public departementsService: DepartementsService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.departements.name;
      this.departements = data.departements;
    } else {
      this.dialogTitle = 'New Departements';
      this.departements = new Departements({});
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
      id: [this.departements.id],
      img: [this.departements.img],
      name: [this.departements.name],
      email: [
        this.departements.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      date: [
        formatDate(this.departements.date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.departements.gender],
      mobile: [this.departements.mobile],
      departement: [this.departements.departement],
      rollNo: [this.departements.rollNo]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.departementsService.addDepartements(this.stdForm.getRawValue());
  }
}
