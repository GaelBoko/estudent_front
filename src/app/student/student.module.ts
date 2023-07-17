import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ChartsModule as chartjsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
} from '@danielmoncada/angular-datetime-picker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableExporterModule } from 'mat-table-exporter';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeworkComponent } from './homework/homework.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { DeleteDialogComponent as leaveDeleteComonent } from './leave-request/dialogs/delete/delete.component';
import { FormDialogComponent } from './leave-request/dialogs/form-dialog/form-dialog.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeworkService } from './homework/homework.service';
import { LeaveRequestService as stdLeaveReqService } from './leave-request/leave-request.service';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { InfoPersonnelleComponent } from './info-personnelle/info-personnelle.component';
import { ECoordonneesComponent } from './e-coordonnees/e-coordonnees.component';
import { ECursusComponent } from './e-cursus/e-cursus.component';
import { ECursusItemComponent } from './e-cursus-item/e-cursus-item.component';
import { EOffreFormationsComponent } from './e-offre-formations/e-offre-formations.component';
import { EOffreFormationItemComponent } from './e-offre-formation-item/e-offre-formation-item.component';
import { EFormationEncoursComponent } from './e-formation-encours/e-formation-encours.component';
import { EEmploiTempsComponent } from './e-emploi-temps/e-emploi-temps.component';
import { EDevoirsComponent } from './e-devoirs/e-devoirs.component';
import { EDevoirItemComponent } from './e-devoir-item/e-devoir-item.component';
import { ECompetencesComponent } from './e-competences/e-competences.component';
import { ECompetenceItemComponent } from './e-competence-item/e-competence-item.component';
import { EExperiencesComponent } from './e-experiences/e-experiences.component';
import { EExperienItemComponent } from './e-experien-item/e-experien-item.component';
import { ECvComponent } from './e-cv/e-cv.component';
import { EExperien2ItemComponent } from './e-experien2-item/e-experien2-item.component';
import { ECompetence2ItemComponent } from './e-competence2-item/e-competence2-item.component';
import { DeleteCptComponent } from './e-competences/dialogs/delete-cpt/delete-cpt.component';
import { FormDialogCptComponent } from './e-competences/dialogs/form-dialog-cpt/form-dialog-cpt.component';
import { DeleteExpComponent } from './e-experiences/dialogs/delete-exp/delete-exp.component';
import { FormDialogExpComponent } from './e-experiences/dialogs/form-dialog-exp/form-dialog-exp.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormDialogCurComponent } from './e-cursus/dialogs/form-dialog-cur/form-dialog-cur.component';
import { DeleteCurComponent } from './e-cursus/dialogs/delete-cur/delete-cur.component';
import { MatStepperModule } from '@angular/material/stepper';
import { EProfilComponent } from './e-profil/e-profil.component';
import { EFormationDetailsComponent } from './e-formation-details/e-formation-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeworkComponent,
    LeaveRequestComponent,
    leaveDeleteComonent,
    FormDialogComponent,
    TimetableComponent,
    SettingsComponent,
    InfoPersonnelleComponent,
    ECoordonneesComponent,
    ECursusComponent,
    ECursusItemComponent,
    EOffreFormationsComponent,
    EOffreFormationItemComponent,
    EFormationEncoursComponent,
    EEmploiTempsComponent,
    EDevoirsComponent,
    EDevoirItemComponent,
    ECompetencesComponent,
    ECompetenceItemComponent,
    EExperiencesComponent,
    EExperienItemComponent,
    ECvComponent,
    EExperien2ItemComponent,
    ECompetence2ItemComponent,
    DeleteCptComponent,
    FormDialogComponent,
    FormDialogCptComponent,
    DeleteExpComponent,
    FormDialogExpComponent,
    DeleteExpComponent,
    FormDialogCurComponent,
    DeleteCurComponent,
    EProfilComponent,
    EFormationDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    chartjsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    MatIconModule,
    MatButtonModule,
    NgApexchartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMenuModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatTableExporterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule
  ],
  providers: [HomeworkService, stdLeaveReqService],
})
export class StudentModule {}
