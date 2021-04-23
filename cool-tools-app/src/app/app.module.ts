import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoolToolsLibModule } from 'cool-tools-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoolToolsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
