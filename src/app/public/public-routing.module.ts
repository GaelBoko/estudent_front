import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DEtablissementComponent } from './etablissement/d-etablissement/d-etablissement.component';
import { LEtablissementsComponent } from './etablissement/l-etablissements/l-etablissements.component';
import { HomeComponent } from './home/home.component';
import { UniversityDescriptionContainerComponent } from './university-description-container/university-description-container.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,pathMatch:"full"},
  {path:"contact",component:ContactComponent},
  {path:"d-etablissment",component:DEtablissementComponent},
  {path:"l-etablissment",component:LEtablissementsComponent},
  {path:"d-university",component:UniversityDescriptionContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
