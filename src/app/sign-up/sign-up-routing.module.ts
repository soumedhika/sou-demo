import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { UsernameComponent } from './username/username.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'name',
    pathMatch: 'full'
  },
  
  {
    path: 'name',
    component: NameComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'username',
    component: UsernameComponent
  },

  {
    path:'**',
    redirectTo:'name',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
