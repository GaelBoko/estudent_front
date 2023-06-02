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

import { EtablissementsRoutingModule } from './etablissements-routing.module';
import { AboutEtablissementComponent } from './about-etablissement/about-etablissement.component';
import { AddEtablissementComponent } from './add-etablissement/add-etablissement.component';
import { EditEtablissementComponent } from './edit-etablissement/edit-etablissement.component';
import { AllEtablissementsComponent } from './all-etablissements/all-etablissements.component';
import { DeleteDialogComponent } from './all-etablissements/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-etablissements/dialogs/form-dialog/form-dialog.component';
import { EtablissementsService } from './all-etablissements/etablissements.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AboutEtablissementComponent,
    AddEtablissementComponent,
    EditEtablissementComponent,
    AllEtablissementsComponent,
    DeleteDialogComponent,
    FormDialogComponent
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
    EtablissementsRoutingModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [EtablissementsService],
})
export class EtablissementsModule {}
