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

import { DepartementsRoutingModule } from './departements-routing.module';
import { AboutDepartementComponent } from './about-departement/about-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { AllDepartementsComponent } from './all-departements/all-departements.component';
import { DeleteDialogComponent } from './all-departements/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-departements/dialogs/form-dialog/form-dialog.component';
import { DepartementsService } from './all-departements/departements.service';
// import { ComponentsModule } from 'src/app/shared/components/components.module';
// import { SharedModule } from 'src/app/shared/shared.module';
import { DepartementAttendanceComponent } from './departement-attendance/departement-attendance.component';
import { DeleteDialogComponent as StdDeleteDialogComponent } from './departement-attendance/dialogs/delete/delete.component';
import { FormDialogComponent as StdFormDialogComponent } from './departement-attendance/dialogs/form-dialog/form-dialog.component';
import { DepartementAttendanceService } from './departement-attendance/attendance.service';

@NgModule({
  declarations: [
    AboutDepartementComponent,
    AddDepartementComponent,
    EditDepartementComponent,
    AllDepartementsComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    DepartementAttendanceComponent,
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
    DepartementsRoutingModule,
    MatProgressSpinnerModule,
    // ComponentsModule,
    // SharedModule,
  ],
  providers: [DepartementsService, DepartementAttendanceService],
})
export class DepartementsModule {}
