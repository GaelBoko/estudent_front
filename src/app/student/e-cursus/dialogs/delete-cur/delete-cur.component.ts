import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursusService } from '../../cursus.service';

@Component({
  selector: 'app-delete-cur',
  templateUrl: './delete-cur.component.html',
  styleUrls: ['./delete-cur.component.sass']
})
export class DeleteCurComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteCurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cursusService: CursusService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.cursusService.deleteCursus(this.data.id);
  }
}
