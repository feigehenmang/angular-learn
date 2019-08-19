import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelfService {
  id: number;
  constructor() {
    this.id = Math.random();
   }
}
