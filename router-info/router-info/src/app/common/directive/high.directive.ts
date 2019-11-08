import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective {
  @Input() color = 'red';
  @HostListener('mouseenter', ['$event']) handelEnter(e) {
    // console.log(e);
    this.changeColor(this.color);
  }
  @HostListener('mouseleave') handelLeave() {
    this.changeColor('black');
  }
  constructor(
    public el: ElementRef, // 当前所在元素的引用
  ) {
    // console.log('el', el);
  }

  changeColor(color) {
    this.el.nativeElement.style.color = color;
  }


}
