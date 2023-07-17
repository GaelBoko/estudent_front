import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatieresRoutingModule } from './matieres-routing.module';
import { AboutMatiereComponent } from './about-matiere/about-matiere.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { EditMatiereComponent } from './edit-matieres/edit-matiere.component';
import { AllMatieresComponent } from './all-matieres/all-matieres.component';
import { DeleteDialogComponent } from './all-matieres/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-matieres/dialogs/form-dialog/form-dialog.component';
import { MatieresService } from './all-matieres/matieres.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatiereAttendanceComponent } from './matiere-attendance/matiere-attendance.component';
import { DeleteDialogComponent as StdDeleteDialogComponent } from './matiere-attendance/dialogs/delete/delete.component';
import { FormDialogComponent as StdFormDialogComponent } from './matiere-attendance/dialogs/form-dialog/form-dialog.component';
import { MatiereAttendanceService } from './matiere-attendance/attendance.service';

@NgModule({
  declarations: [
    AboutMatiereComponent,
    AddMatiereComponent,
    EditMatiereComponent,
    AllMatieresComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    MatiereAttendanceComponent,
    StdDeleteDialogComponent,
    StdFormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatMenuModule,
    MatTooltipModule,
    MatTableExporterModule,
    MatieresRoutingModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [MatieresService, MatiereAttendanceService],
})
export class MatieresModule {}
