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

import { CyclesRoutingModule } from './cycles-routing.module';
import { AboutCycleComponent } from './about-cycle/about-cycle.component';
import { AddCycleComponent } from './add-cycle/add-cycle.component';
import { EditCycleComponent } from './edit-cycle/edit-cycle.component';
import { AllCyclesComponent } from './all-cycles/all-cycles.component';
import { DeleteDialogComponent } from './all-cycles/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-cycles/dialogs/form-dialog/form-dialog.component';
import { CyclesService } from './all-cycles/cycles.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CycleAttendanceComponent } from './cycle-attendance/cycle-attendance.component';
import { DeleteDialogComponent as StdDeleteDialogComponent } from './cycle-attendance/dialogs/delete/delete.component';
import { FormDialogComponent as StdFormDialogComponent } from './cycle-attendance/dialogs/form-dialog/form-dialog.component';
import { CycleAttendanceService } from './cycle-attendance/attendance.service';

@NgModule({
  declarations: [
    AboutCycleComponent,
    AddCycleComponent,
    EditCycleComponent,
    AllCyclesComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    CycleAttendanceComponent,
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
    CyclesRoutingModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [CyclesService, CycleAttendanceService],
})
export class CyclesModule {}
