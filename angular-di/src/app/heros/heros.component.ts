import { Component, OnInit, Inject, Self, Optional, SkipSelf, Host } from '@angular/core';
import { HerosService } from './heros.service';
import { UserService } from '../user/service/user.service';
import { InjectService } from '../service/inject.service';
import { SelfService } from '../service/self.service';
import { OptinalService } from '../service/optinal.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  providers: [SelfService]
})
export class HerosComponent implements OnInit {

  constructor(
    public heroService: HerosService,
    public userService: UserService,
    @Inject(InjectService) public inject: InjectService,
    @Self() public id: SelfService,
    @Host() public hostS: SelfService,
    @SkipSelf() public parentId: SelfService,
    @Self() @Optional() public optinal: OptinalService
  ) { }

  ngOnInit() {
    console.log(this.heroService.getHeros());
    console.log(this.heroService);
    console.log(this.userService);
    console.log(this.inject);
    console.log("id service: ", this.id, this.id.id);
    console.log(this.optinal);
    console.log(this.parentId);
    console.log(this.hostS);
  }

}
