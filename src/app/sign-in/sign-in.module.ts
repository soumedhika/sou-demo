import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SignInRoutingModule,
    FormsModule
  ]
})
export class SignInModule { }
