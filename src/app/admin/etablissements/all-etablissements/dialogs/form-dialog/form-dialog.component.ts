import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { EtablissementsService } from '../../etablissements.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Etablissements } from '../../etablissements.model';
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
  etablissements: Etablissements;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public etablissementsService: EtablissementsService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.etablissements.name;
      this.etablissements = data.etablissements;
    } else {
      this.dialogTitle = 'New Etablissements';
      this.etablissements = new Etablissements({});
    }
    this.stdForm = this.createEtablissemntForm();
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
  createEtablissemntForm(): UntypedFormGroup {
    return this.fb.group({
      codeEts: [this.etablissements.codeEts],
      nom: [this.etablissements.nom],
      nomResponsable: [this.etablissements.nomResponsable],
      telResponsable: [this.etablissements.telResponsable],
      adresse: [this.etablissements.adresse],
      telephone: [this.etablissements.telephone],
      siteweb: [this.etablissements.siteweb],
      pays: [this.etablissements.pays],
      ville: [this.etablissements.ville],
      latitude: [this.etablissements.latitude],
      longitude: [this.etablissements.longitude],
      universiteGuid: [this.etablissements.universiteGuid],
      email: [
        this.etablissements.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.etablissementsService.addEtablissements(this.stdForm.getRawValue());
  }
}
