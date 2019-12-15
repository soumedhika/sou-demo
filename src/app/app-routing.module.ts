import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch:'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  //otherwise redirect to SignIn
  {
    path: '**',
    redirectTo: '/signin',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
