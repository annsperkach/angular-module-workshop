import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppAComponent } from './app-a/app-a.component';
import { AppBComponent } from './app-b/app-b.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAComponent,
    AppBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
