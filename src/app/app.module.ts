import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './page/user/user.component';
import { RoleComponent } from './page/role/role.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page/page404/page404.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoleComponent,
    Page404Component,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
