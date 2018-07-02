import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QsAngular2BusyModule } from 'qs-angular2-busy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QsAngular2BusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
