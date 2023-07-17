import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { CompetenceServiceService } from '../../competence-service.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete-cpt.component.html',
  styleUrls: ['./delete-cpt.component.sass'],
})
export class DeleteCptComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public competenceService: CompetenceServiceService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
   // this.competenceService.deleteTeachers(this.data.id);
  }
}
