import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor() { }
  getHeros() {
    return [
      { name: 'asd' },
      { name: 'asd' },
      { name: 'asd' },
      { name: 'asd' },
      { name: 'asd' },
      { name: 'asd' }
    ];
  }
}
