import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { UserModule } from './user/user.module';
import { SelfService } from './service/self.service';
import { InjectComponent } from './Inject/inject/inject.component';
import { MyConfig, MYCONFIG } from './service/my-config';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    InjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    UserModule
  ],
  providers: [
    SelfService,
    {
      provide: MyConfig,
      useValue: MYCONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
