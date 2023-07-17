import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { UntypedFormControl, Validators,UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Competence } from 'src/app/student/competence';
import { CompetenceServiceService } from '../../competence-service.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-dialog-cpt',
  templateUrl: './form-dialog-cpt.component.html',
  styleUrls: ['./form-dialog-cpt.component.sass']
})
export class FormDialogCptComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  competence: Competence;

  constructor(
    public dialogRef: MatDialogRef<FormDialogCptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public competenceService: CompetenceServiceService,
    private fb: UntypedFormBuilder
  ){
    this.action=data.action;
    if(this.action=='edit'){
      this.dialogTitle=data.competence.titre;
      this.competence=data.competence;
    }else{
      this.dialogTitle='New compétence';
      this.competence=new Competence({});
    }
    this.stdForm=this.createCompetenceForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required
    // Validators.email,
  ]);
  createCompetenceForm():UntypedFormGroup{
    return this.fb.group({
      titre:[this.competence.titre],
      domaine:[this.competence.domaine],
      hasMore:[this.competence.hasMore],
      description:[this.competence.description]
    });
  }

  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {

  }
}
