import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
    DevExtremeModule
} from 'devextreme-angular';
import { MessageComponent } from './message/message.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [AppComponent, MessageComponent, TemplateComponent],
  imports: [
    BrowserModule,
    DevExtremeModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class MyAppModule {}
