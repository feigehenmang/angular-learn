import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirectiveDirective } from './../test-directive.directive';

@NgModule({
  declarations: [
    TestDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [TestDirectiveDirective]
})
export class CommonDirectiveModule { }
