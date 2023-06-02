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

import { UniversitiesRoutingModule } from './universities-routing.module';
import { AboutUniversityComponent } from './about-university/about-university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { EditUniversityComponent } from './edit-university/edit-university.component';
import { AllUniversitiesComponent } from './all-universities/all-universities.component';
import { DeleteDialogComponent } from './all-universities/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-universities/dialogs/form-dialog/form-dialog.component';
import { UniversitiesService } from './all-universities/universities.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AboutUniversityComponent,
    AddUniversityComponent,
    EditUniversityComponent,
    AllUniversitiesComponent,
    DeleteDialogComponent,
    FormDialogComponent,
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
    UniversitiesRoutingModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}
