import { Component, OnInit, ContentChild, AfterContentInit, AfterContentChecked, ContentChildren } from '@angular/core';
import { AppContentComponent } from './../app-content/app-content.component';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChildren(AppContentComponent) appContent: AppContentComponent;
  obj = {
    name: 'hello'
  };
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    console.log('contentInit', this.appContent);
  }
  ngAfterContentChecked() {
    console.log('contentChecked', this.appContent);
  }
}
