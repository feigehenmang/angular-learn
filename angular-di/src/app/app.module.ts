import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { UserModule } from './user/user.module';
import { SelfService } from './service/self.service';
import { InjectComponent } from './Inject/inject/inject.component';
// import { MyConfig, MYCONFIG } from './service/my-config';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopInterceptor } from './interceptor/hc-interceptor';
import { EditorModule } from './utils/editor/editor.module';
import { OuterSideComponent } from './components/outer-side/outer-side.component';
import { InnerComponent } from './components/inner/inner.component';
// import { TestDirectiveDirective } from './directives/test-directive.directive';
import { CommonDirectiveModule } from './directives/common-directive/common-directive.module';
import { MyDragDirective } from './directives/my-drag.directive';
// import { DevExtremeModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    InjectComponent,
    OuterSideComponent,
    InnerComponent,
    MyDragDirective,
    // TestDirectiveDirective
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    UserModule,
    // DevExtremeModule,
    EditorModule,
    CommonDirectiveModule
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
