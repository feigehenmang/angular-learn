import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-high',
  templateUrl: './high.component.html',
  styleUrls: ['./high.component.scss']
})
export class HighComponent implements OnInit {
  constructor(
    public router: Router,
    public routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.router);
    console.log(this.routerInfo);
    this.routerInfo.params.subscribe(params => {
      console.log(params);
    });
    this.routerInfo.paramMap.subscribe(params => {
      console.log(params);
    });
    this.routerInfo.data.subscribe(params => {
      console.log(params);
    });
  }

}
