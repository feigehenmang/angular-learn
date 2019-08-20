import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectService {
  name: string;
  constructor() {
    this.name = 'Inject: ' + new Date().getTime();
    console.log(this.name);
  }
}
