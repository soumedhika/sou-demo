import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc/calc.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CalcBtnComponent } from './calc-btn/calc-btn.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'calc',
    pathMatch: 'full'
  },
  {
    path: 'calc',
    component: CalcComponent
  },
  {
    path:'**',
    redirectTo:'calc',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [CalcComponent, CalcBtnComponent], 
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MathModule { }
