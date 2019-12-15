import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { UsernameComponent } from './username/username.component';


@NgModule({
  declarations: [NameComponent, EmailComponent, UsernameComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
