import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { AppTemplateDirective } from '../app-template.directive';

@NgModule({
  declarations: [
    GridComponent,
    // AppTemplateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent,
    // AppTemplateDirective
  ]
})
export class GridModule { }
