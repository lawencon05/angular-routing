import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './page/user/user.component';
import { RoleComponent } from './page/role/role.component';
import { AppComponent } from './app.component';
import { Page404Component } from './page/page404/page404.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('./module/master/master.module')
      .then(m => m.MasterModule)
  },
  {
    path: '**',
    component: Page404Component
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
