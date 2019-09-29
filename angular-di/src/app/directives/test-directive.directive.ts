import { Directive, TemplateRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(el: ElementRef) {
    // console.log(el);
    // console.log(arguments)
  }

}
