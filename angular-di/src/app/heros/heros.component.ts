import { Component, OnInit } from '@angular/core';
import { HerosService } from './heros.service';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(
    public heroService: HerosService,
    public userService: UserService
  ) { }

  ngOnInit() {
    console.log(this.heroService.getHeros());
    console.log(this.heroService);
    console.log(this.userService);
  }

}
