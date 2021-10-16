import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavButtonComponent } from './component/nav-button/nav-button.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { TopbarComponent } from './component/topbar/topbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    routingComponents,
    PageNotFoundComponent,
    TopbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
