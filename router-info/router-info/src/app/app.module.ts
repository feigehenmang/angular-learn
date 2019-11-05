import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadAllModules } from './common/preload';
import { PageNotFundComponent } from './common/page-not-fund/page-not-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    PreloadAllModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
