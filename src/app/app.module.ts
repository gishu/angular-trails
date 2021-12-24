import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HandRolledComponent } from "./hand-rolled/hand-rolled.component";

@NgModule({
  declarations: [
    HandRolledComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HandRolledComponent]
})
export class AppModule { }
