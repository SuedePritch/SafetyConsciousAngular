import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { EmergencyComponent } from './page/emergency/emergency.component';
import { DocumentsComponent } from './page/documents/documents.component';
import { CertificatesComponent } from './page/certificates/certificates.component';
import { IncidentsComponent } from './page/incidents/incidents.component';
import { WhmisComponent } from './page/whmis/whmis.component';
import { SitedetailsComponent } from './page/sitedetails/sitedetails.component';
import { FlhaComponent } from './page/flha/flha.component';
import { CovidComponent } from './page/covid/covid.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';


const routes: Routes = [

  
  {path: '', component: CovidComponent},
  {path: 'home', component: HomeComponent},
  {path: 'emergency', component: EmergencyComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'certificates', component: CertificatesComponent},
  {path: 'incidents', component: IncidentsComponent},
  {path: 'whmis', component: WhmisComponent},
  {path: 'siteDetails', component: SitedetailsComponent},
  {path: 'flha', component: FlhaComponent},
  {path: 'covid', component: CovidComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  HomeComponent,
  EmergencyComponent,
  CertificatesComponent,
  IncidentsComponent,
  WhmisComponent,
  SitedetailsComponent,
  FlhaComponent,
  CovidComponent
]
