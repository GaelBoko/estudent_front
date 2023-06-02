import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUniversitiesComponent } from './all-universities/all-universities.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { EditUniversityComponent } from './edit-university/edit-university.component';
import { AboutUniversityComponent } from './about-university/about-university.component';

const routes: Routes = [
  {
    path: 'all-universities',
    component: AllUniversitiesComponent,
  },
  {
    path: 'add-university',
    component: AddUniversityComponent,
  },
  {
    path: 'edit-university',
    component: EditUniversityComponent,
  },
  {
    path: 'about-university',
    component: AboutUniversityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitiesRoutingModule {
  constructor(){}
}
