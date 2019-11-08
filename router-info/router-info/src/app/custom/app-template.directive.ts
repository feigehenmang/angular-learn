import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appAppTemplate]'
})
export class AppTemplateDirective {
  @Input() set appTemplateOf(data) {
    console.log(data);
  }
  @Input() set letItem(data) {
    console.log(data);
  }

  constructor() { }

}
