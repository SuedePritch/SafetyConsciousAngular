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
import { AddreportComponent } from './page/addreport/addreport.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: CovidComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Emergency', component: EmergencyComponent},
  {path: 'Documents', component: DocumentsComponent},
  {path: 'Certificates', component: CertificatesComponent},
  {path: 'Incidents', component: IncidentsComponent},
  {path: 'WHMIS', component: WhmisComponent},
  {path: 'Site Details', component: SitedetailsComponent},
  {path: 'FLHA', component: FlhaComponent},
  {path: 'Covid', component: CovidComponent},
  {path: 'Add Report', component: AddreportComponent},
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
  CovidComponent,
  AddreportComponent,
  PageNotFoundComponent
]
