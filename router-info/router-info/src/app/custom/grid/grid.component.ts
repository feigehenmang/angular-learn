import { Component, OnInit, ViewChild, ViewContainerRef, Input, ViewChildren } from '@angular/core';

interface DataSource {
  name: string;
  id: number;
  age: number;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChildren('container', {read: ViewContainerRef}) container: ViewContainerRef;


  @Input() dataSource: DataSource[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.container);
  }

}
