import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadAllModules } from './common/preload';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PreloadAllModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
