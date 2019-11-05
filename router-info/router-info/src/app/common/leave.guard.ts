import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<any> {
  constructor(
    public dialog: DialogService
  ) {

  }
  canDeactivate() {
    return this.dialog.dialog();
  }
}
