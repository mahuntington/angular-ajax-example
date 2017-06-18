import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';

import { HttpModule }    from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
