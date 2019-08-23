import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { UserModule } from './user/user.module';
import { SelfService } from './service/self.service';
import { InjectComponent } from './Inject/inject/inject.component';
import { MyConfig, MYCONFIG } from './service/my-config';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopInterceptor } from './interceptor/hc-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    InjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    UserModule
  ],
  providers: [
    SelfService,
    // {
    //   provide: MyConfig,
    //   useValue: MYCONFIG
    // }
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
