import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HandRolledComponent } from "./hand-rolled/hand-rolled.component";
import { QuickComponent } from './quick/quick.component';
import { MyUberComponent } from './my-uber/my-uber.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';

@NgModule({
  declarations: [
    HandRolledComponent,
    QuickComponent,
    MyUberComponent,
    LifecycleDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyUberComponent]
})
export class AppModule { }
