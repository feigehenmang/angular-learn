import { Directive, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {
  hasView = false;
  @Input() set appHide(condition: boolean) { // 监听appHide值的变化
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
