import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
