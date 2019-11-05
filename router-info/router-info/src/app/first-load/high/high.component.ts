import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HighService } from './high.service';

@Component({
  selector: 'app-high',
  templateUrl: './high.component.html',
  styleUrls: ['./high.component.scss']
})
export class HighComponent implements OnInit {
  constructor(
    public router: Router,
    public routerInfo: ActivatedRoute,
    public service: HighService
  ) { }
  hero$: Observable<any>;
  ngOnInit() {
    this.hero$ = this.routerInfo.paramMap
    .pipe(
      switchMap(
        (params: ParamMap) => {
          console.log(params.get('id'));
          return this.service.getHero(+params.get('id'))
        }
      )
    )
    // console.log(this.router);
    // console.log(this.routerInfo);
    // this.routerInfo.params.subscribe(params => {
    //   console.log(params);
    // });
    // this.routerInfo.paramMap.subscribe(params => {
    //   console.log(params);
    // });
    // this.routerInfo.data.subscribe(params => {
    //   console.log(params);
    // });
  }

}
