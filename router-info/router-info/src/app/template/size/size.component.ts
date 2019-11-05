import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  @Input() num: number;
  @Output() numChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.num++;
    this.numChange.emit(this.num);
  }

}
