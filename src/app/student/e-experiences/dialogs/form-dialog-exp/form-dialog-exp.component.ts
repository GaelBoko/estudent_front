import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experience } from 'src/app/student/experience';
import { ExperienceService } from '../../experience.service';

@Component({
  selector: 'app-form-dialog-exp',
  templateUrl: './form-dialog-exp.component.html',
  styleUrls: ['./form-dialog-exp.component.sass']
})
export class FormDialogExpComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  experience: Experience;

  constructor(
    public dialogRef: MatDialogRef<FormDialogExpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public eExperiencesService: ExperienceService,
    private fb: UntypedFormBuilder
  ){
    this.action=data.action;
    if(this.action=='edit'){
      this.dialogTitle=data.experience.titreProjet;
      this.experience=data.experience;
    }else{
      this.dialogTitle='Nouvelle Expérience professionnelle';
      this.experience=new Experience({});
    }
    this.stdForm=this.createExperienceForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required
    // Validators.email,
  ]);
  createExperienceForm():UntypedFormGroup{
    return this.fb.group({
      titreProjet:[this.experience.titreProjet],
      domaineActivite:[this.experience.domaineActivite],
      role:[this.experience.role],
      descriptionProjet:[this.experience.descriptionProjet],
      periodeDebut:[this.experience.periodeDebut],
      periodeFin:[this.experience.periodeFin],
      missions:[this.experience.missions]
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
