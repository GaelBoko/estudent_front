import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDepartementsComponent } from './all-departements/all-departements.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { AboutDepartementComponent } from './about-departement/about-departement.component';
import { DepartementAttendanceComponent } from './departement-attendance/departement-attendance.component';

const routes: Routes = [
  {
    path: 'all-departements',
    component: AllDepartementsComponent,
  },
  {
    path: 'add-departement',
    component: AddDepartementComponent,
  },
  {
    path: 'edit-departement',
    component: EditDepartementComponent,
  },
  {
    path: 'about-departement',
    component: AboutDepartementComponent,
  },
  {
    path: 'departement-attendance',
    component: DepartementAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartementsRoutingModule {}
