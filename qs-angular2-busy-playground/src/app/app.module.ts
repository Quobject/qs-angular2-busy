import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QsAngular2BusyModule, BusyConfig } from 'qs-angular2-busy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QsAngular2BusyModule,
    QsAngular2BusyModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
