import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEtablissementsComponent } from './all-etablissements/all-etablissements.component';
import { AddEtablissementComponent } from './add-etablissement/add-etablissement.component';
import { EditEtablissementComponent } from './edit-etablissement/edit-etablissement.component';
import { AboutEtablissementComponent } from './about-etablissement/about-etablissement.component';

const routes: Routes = [
  {
    path: 'all-etablissements',
    component: AllEtablissementsComponent,
  },
  {
    path: 'add-etablissement',
    component: AddEtablissementComponent,
  },
  {
    path: 'edit-etablissement',
    component: EditEtablissementComponent,
  },
  {
    path: 'about-etablissement',
    component: AboutEtablissementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementsRoutingModule {}
