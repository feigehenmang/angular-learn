import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  content: any = {
  };

  @Input()
  set text(arg: string) {

    this.content.text = (arg && arg.trim()) || 'default value';
  }
  get text() {
    return this.content.text;
  }
  constructor() { }

  ngOnInit() {
  }

}
