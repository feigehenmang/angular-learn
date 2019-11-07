import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  @Input() name = '';
  @Output() clickEv: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  click() {
    this.clickEv.emit('click');
  }

}
