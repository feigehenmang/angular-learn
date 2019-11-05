import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  dialog(message: string = '请确认你是否准备好了') {
    return of(window.confirm(message));
  }
}
