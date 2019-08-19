import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { SelfService } from 'src/app/service/self.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    public userService: UserService,
    public id: SelfService
  ) { }

  ngOnInit() {
    console.log(this.userService);
    console.log("parent", this.id)
  }

}
