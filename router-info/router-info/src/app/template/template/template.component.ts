import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  // interpolation: ['{', '}']
})
export class TemplateComponent implements OnInit {
  title = 'hello Title';
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  items = ['a', 'b', 'c', 'd'];
  checkItems = [
    {
      value: 'A',
      checked: false
    },
    {
      value: 'B',
      checked: false
    },
    {
      value: 'C',
      checked: false
    },
    {
      value: 'D',
      checked: false
    }
  ];
  switchCase = 'a';
  constructor() { }
  size = 15;
  nullHero;
  ngOnInit() {
  }
  log() {
    console.log(this.checkItems);
  }

  trackByFn(index, item) {
    // console.log(index, item);
    return index;
  }
}
