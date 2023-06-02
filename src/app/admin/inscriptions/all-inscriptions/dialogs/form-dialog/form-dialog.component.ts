import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { InscriptionsService } from '../../inscriptions.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Inscriptions } from '../../inscriptions.model';
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
  inscriptions: Inscriptions;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public inscriptionsService: InscriptionsService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.inscriptions.name;
      this.inscriptions = data.inscriptions;
    } else {
      this.dialogTitle = 'New Inscriptions';
      this.inscriptions = new Inscriptions({});
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
      id: [this.inscriptions.id],
      img: [this.inscriptions.img],
      name: [this.inscriptions.name],
      email: [
        this.inscriptions.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      date: [
        formatDate(this.inscriptions.date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.inscriptions.gender],
      mobile: [this.inscriptions.mobile],
      inscription: [this.inscriptions.inscription],
      rollNo: [this.inscriptions.rollNo]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.inscriptionsService.addInscriptions(this.stdForm.getRawValue());
  }
}
