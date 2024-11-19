import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModifierFoodstruckComponent} from './modifier-foodstruck/modifier-foodstruck.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/modifier-foodstruck', pathMatch: 'full'},
  {path: 'modifie', component: ModifierFoodstruckComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
