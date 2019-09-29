import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log('当前this对象: ', this);
  }
  handelClick() {
    this.event.emit({data: {name: 'xiaoming'}});
  }

}
