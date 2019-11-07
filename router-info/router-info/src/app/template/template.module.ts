import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { SizeComponent } from './size/size.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { AppContentComponent } from './app-content/app-content.component';

@NgModule({
  declarations: [TemplateComponent, SizeComponent, ChildViewComponent, AppContentComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
