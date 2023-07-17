import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExperienceService } from '../../experience.service';

@Component({
  selector: 'app-delete-exp',
  templateUrl: './delete-exp.component.html',
  styleUrls: ['./delete-exp.component.sass']
})
export class DeleteExpComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteExpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public competenceService: ExperienceService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
   // this.competenceService.deleteTeachers(this.data.id);
  }
}
