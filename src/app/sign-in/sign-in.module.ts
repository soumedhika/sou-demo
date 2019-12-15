import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
