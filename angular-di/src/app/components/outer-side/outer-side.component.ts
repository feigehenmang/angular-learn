import { Component, OnInit, ContentChild } from '@angular/core';
import { InnerComponent } from '../inner/inner.component';

@Component({
  selector: 'app-outer-side',
  templateUrl: './outer-side.component.html',
  styleUrls: ['./outer-side.component.css']
})
export class OuterSideComponent implements OnInit {
  @ContentChild(InnerComponent) inner: InnerComponent;

  constructor() { }

  ngOnInit() {
    console.log(this);
    this.inner.event.subscribe((res) => {
      console.log(res);
    });
  }

}
