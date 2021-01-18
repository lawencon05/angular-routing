import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { Page404Component } from './page/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
