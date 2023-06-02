import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllInscriptionsComponent } from './all-inscriptions/all-inscriptions.component';
import { AddInscriptionComponent } from './add-inscription/add-inscription.component';
import { EditInscriptionComponent } from './edit-inscription/edit-inscription.component';
import { AboutInscriptionComponent } from './about-inscription/about-inscription.component';

const routes: Routes = [
  {
    path: 'all-inscriptions',
    component: AllInscriptionsComponent,
  },
  {
    path: 'add-inscription',
    component: AddInscriptionComponent,
  },
  {
    path: 'edit-inscription',
    component: EditInscriptionComponent,
  },
  {
    path: 'about-inscription',
    component: AboutInscriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionsRoutingModule {}
