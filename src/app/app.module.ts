import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExtraModule } from '@crosssoft/document';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
