import { Component, OnInit, Injector } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.css']
})
export class InjectComponent implements OnInit {
  userService: UserService;
  constructor(
    public inject: Injector
  ) { }

  ngOnInit() {
    this.userService = this.inject.get(UserService);
    console.log(this.inject);
    console.log(this.userService);
  }

}
