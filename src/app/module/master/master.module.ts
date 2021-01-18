import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoleModule,
    UserModule
  ]
})
export class MasterModule { }
