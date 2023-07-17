import { Page404Component } from './../authentication/page404/page404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeworkComponent } from './homework/homework.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SettingsComponent } from './settings/settings.component';
import { ECompetencesComponent } from './e-competences/e-competences.component';
import { EExperiencesComponent } from './e-experiences/e-experiences.component';
import { ECursusComponent } from './e-cursus/e-cursus.component';
import { ECoordonneesComponent } from './e-coordonnees/e-coordonnees.component';
import { InfoPersonnelleComponent } from './info-personnelle/info-personnelle.component';
import { EProfilComponent } from './e-profil/e-profil.component';
import { EOffreFormationsComponent } from './e-offre-formations/e-offre-formations.component';
import { EFormationEncoursComponent } from './e-formation-encours/e-formation-encours.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'homework',
    component: HomeworkComponent,
  },
  {
    path: 'leave-request',
    component: LeaveRequestComponent,
  },
  {
    path: 'timetable',
    component: TimetableComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'experiences',
    component: EExperiencesComponent,
  },
  {
    path: 'competences',
    component: ECompetencesComponent,
  },
  {
    path: 'cursus',
    component: ECursusComponent,
  },
  {
    path: 'coordonnees',
    component: ECoordonneesComponent,
  },
  {
    path: 'offre_formation',
    component: EOffreFormationsComponent,
  },
  {
    path: 'maformation',
    component: EFormationEncoursComponent,
  },
  {
    path: 'profil',
    component: EProfilComponent,
  },
  {
    path: 'identification',
    component: InfoPersonnelleComponent,
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
