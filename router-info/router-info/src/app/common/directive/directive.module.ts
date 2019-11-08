import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighDirective } from './high.directive';
import { HideDirective } from './hide.directive';

@NgModule({
  declarations: [HighDirective, HideDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HighDirective
  ]
})
export class DirectiveModule { }
