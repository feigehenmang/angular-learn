import { Directive, ElementRef, HostListener, Host } from '@angular/core';
interface Position {
  x: number;
  y: number;
}
@Directive({
  selector: '[appMyDrag]'
})
export class MyDragDirective {
  currPosition: Position = {
    x: 0,
    y: 0
  };
  isDrag: boolean = false;
  constructor(
    public el: ElementRef
  ) {
    el.nativeElement.classList.add('drag-box');
    // console.log(el);
    // this.el.nativeElement
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event){
    // console.log(event);
    // console.log(this.el.nativeElement.getBoundingClientRect());
    this.currPosition.x = event.clientX - this.el.nativeElement.getBoundingClientRect().left;
    this.currPosition.y = event.clientY - this.el.nativeElement.getBoundingClientRect().top;
    this.isDrag = true;
    // console.log(this.currPosition);
  }
  @HostListener('mousemove', ['$event', '$event.target']) onMouseMove(event, target) {
    if (this.isDrag) {
      const { x, y } = this.currPosition;
      const { clientX: currX, clientY: currY } = event;
      const needX = currX - x < 0 ? 0 : currX - x > document.body.clientWidth - x ? document.body.clientWidth - x : currX - x;
      const needY = currY - y < 0 ? 0 : currY - y > document.body.clientHeight - y ? document.body.clientHeight - y : currY - y;
      // needX = currX
      // if(needX !== target.getBoundingClientRect().left && needY !== target.getBoundingClientRect().top){
      target.style.left = needX + 'px';
      target.style.top =  needY + 'px';
      // }
    }
  }

  @HostListener('mouseup') onMouseUp() {
    // this.onMouseUp = this.onMouseMove = null;
    // console.log(this.onMouseMove);
    // this.onMouseMove = () => {};
      this.isDrag = false;
  }
}
