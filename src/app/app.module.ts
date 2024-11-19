import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModifierFoodstruckComponent } from './modifier-foodstruck/modifier-foodstruck.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModifierFoodstruckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
