import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMatieresComponent } from './all-matieres/all-matieres.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { EditMatiereComponent } from './edit-matiere/edit-matiere.component';
import { AboutMatiereComponent } from './about-matiere/about-matiere.component';
import { MatiereAttendanceComponent } from './matiere-attendance/matiere-attendance.component';

const routes: Routes = [
  {
    path: 'all-matieres',
    component: AllMatieresComponent,
  },
  {
    path: 'add-matiere',
    component: AddMatiereComponent,
  },
  {
    path: 'edit-matiere',
    component: EditMatiereComponent,
  },
  {
    path: 'about-matiere',
    component: AboutMatiereComponent,
  },
  {
    path: 'matiere-attendance',
    component: MatiereAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatieresRoutingModule {}
