import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class UserService {

  constructor() { }
  getUser(): User {
    return {
      name: 'ljf',
      age: 18
    };
  }
}
