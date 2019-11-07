import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ChildViewComponent } from './../child-view/child-view.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  // interpolation: ['{', '}']
})
export class TemplateComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(ChildViewComponent) childView: ChildViewComponent;

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
    // this.childView.name = 'hello1';
  }

  trackByFn(index, item) {
    // console.log(index, item);
    return index;
  }

  ngAfterViewInit(): void {
    // console.log(this.childView);
    console.log('afterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log(this.childView);
    console.log('afterViewChecked', '可以监听到子组件的属性发生变化');
    // setTimeout(
    //   () => {
    //     this.childView.obj.name = 'change';
    //   }, 100
    // )
  }
}
