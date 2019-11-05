import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { SizeComponent } from './size/size.component';

@NgModule({
  declarations: [TemplateComponent, SizeComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
