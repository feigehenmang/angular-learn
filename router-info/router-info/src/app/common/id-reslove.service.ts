import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdResloveService implements Resolve<any> {

  constructor(public router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.group();
    console.log(route);
    console.log(state);
    console.groupEnd();
    if (route.params.id === '11') {
      this.router.navigate(['first-load']);
    }
    return of({
      data: 123
    });
  }
}
