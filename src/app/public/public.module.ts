import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { BlockCoursesContainerComponent } from './block-courses-container/block-courses-container.component';
import { ContactComponent } from './contact/contact.component';
import { ContentSliderContainerComponent } from './content-slider-container/content-slider-container.component';
import { LEtablissementsComponent } from './etablissement/l-etablissements/l-etablissements.component';
import { DEtablissementComponent } from './etablissement/d-etablissement/d-etablissement.component';
import { HomeComponent } from './home/home.component';
import { InfoContainerComponent } from './info-container/info-container.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { NavFistmenuComponent } from './nav-fistmenu/nav-fistmenu.component';
import { NavFistnewsComponent } from './nav-fistnews/nav-fistnews.component';
import { NavSecondmenuComponent } from './nav-secondmenu/nav-secondmenu.component';
import { NavSecondnewsComponent } from './nav-secondnews/nav-secondnews.component';
import { SetingsBoxContainerComponent } from './setings-box-container/setings-box-container.component';
import { FooterContainerComponent } from './template-site/footer-container/footer-container.component';
import { HeaderContainerComponent } from './template-site/header-container/header-container.component';
import { NavContainerComponent } from './template-site/nav-container/nav-container.component';
import { UniversityDescriptionContainerComponent } from './university-description-container/university-description-container.component';
import { VideoBlockContenairComponent } from './video-block-contenair/video-block-contenair.component';
import { PLayoutComponent } from './p-layout/p-layout.component';


@NgModule({
  declarations: [
    BlockCoursesContainerComponent,
    ContactComponent,
    ContentSliderContainerComponent,
    LEtablissementsComponent,
    DEtablissementComponent,
    HomeComponent,
    InfoContainerComponent,
    MobileMenuComponent,
    NavFistmenuComponent,
    NavFistnewsComponent,
    NavSecondmenuComponent,
    NavSecondnewsComponent,
    SetingsBoxContainerComponent,
    FooterContainerComponent,
    HeaderContainerComponent,
    NavContainerComponent,
    UniversityDescriptionContainerComponent,
    VideoBlockContenairComponent,
    PLayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
