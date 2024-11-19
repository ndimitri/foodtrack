import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'node:path';
import {ModifierFoodstruckComponent} from './modifier-foodstruck/modifier-foodstruck.component';

const routes: Routes = [
  {path: 'modifie', component: ModifierFoodstruckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
