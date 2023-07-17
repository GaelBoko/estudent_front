import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ECursus } from 'src/app/student/e-cursus';
import { CursusService } from '../../cursus.service';

@Component({
  selector: 'app-form-dialog-cur',
  templateUrl: './form-dialog-cur.component.html',
  styleUrls: ['./form-dialog-cur.component.sass']
})
export class FormDialogCurComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  cursus: ECursus;

  constructor(
    public dialogRef: MatDialogRef<FormDialogCurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cursusService: CursusService,
    private fb: UntypedFormBuilder
  ){
    this.action=data.action;
    if(this.action=='edit'){
      this.dialogTitle=data.cursus.diplomeObtenu;
      this.cursus=data.cursus;
    }else{
      this.dialogTitle='Ajout d\'un nouvel du cursus';
      this.cursus=new ECursus({});
    }
    this.stdForm=this.createCompetenceForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required
    // Validators.email,
  ]);
  createCompetenceForm():UntypedFormGroup{
    return this.fb.group({
      diplomeObtenu:[this.cursus.diplomeObtenu],
      description:[this.cursus.description],
      niveauScolaire:[this.cursus.niveauScolaire],
      duree:[this.cursus.duree],
      matieres:[this.cursus.matieres],
      credit:[this.cursus.credit],
      etablissement:[this.cursus.etablissement],
      dateDebut:[this.cursus.dateDebut],
      dateFin:[this.cursus.dateFin]
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
