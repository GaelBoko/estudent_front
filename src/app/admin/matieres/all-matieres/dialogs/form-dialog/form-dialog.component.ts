import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatieresService } from '../../matieres.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Matieres } from '../../matieres.model';
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
  matieres: Matieres;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matieresService: MatieresService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.matieres.name;
      this.matieres = data.matieres;
    } else {
      this.dialogTitle = 'New Matieres';
      this.matieres = new Matieres({});
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
      id: [this.matieres.id],
      img: [this.matieres.img],
      name: [this.matieres.name],
      email: [
        this.matieres.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      date: [
        formatDate(this.matieres.date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.matieres.gender],
      mobile: [this.matieres.mobile],
      matiere: [this.matieres.matiere]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.matieresService.addMatieres(this.stdForm.getRawValue());
  }
}
