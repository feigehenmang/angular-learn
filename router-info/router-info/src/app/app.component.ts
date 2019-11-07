import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './common/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements AfterViewInit {
  title = 'router-info';
  // @ViewChild('routerOutlet') routerOutlet: any;
  ngAfterViewInit(): void {
    // console.log(this.routerOutlet);
  }

  getAnimationData(outlet: RouterOutlet) {
    // console.log(outlet);
    const flag = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[flag];
  }

  onActivate(e) {
    console.log('curr component', e);
  }
}
