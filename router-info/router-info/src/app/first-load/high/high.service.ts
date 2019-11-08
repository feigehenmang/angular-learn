import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HighService {

  constructor() { }
  getHero(id: number): Observable<Hero[]> {
    return of([{
      name: 'a',
      age: id
    }]);
  }
}
interface Hero {
  name: string;
  age: number;
}
