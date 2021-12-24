import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HandRolledComponent } from "./hand-rolled/hand-rolled.component";
import { QuickComponent } from './quick/quick.component';

@NgModule({
  declarations: [
    HandRolledComponent,
    QuickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HandRolledComponent]
})
export class AppModule { }
