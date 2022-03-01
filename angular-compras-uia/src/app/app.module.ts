import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportesComponenteComponent } from './reportes-componente/reportes-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportesComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
