import { Component, Inject } from '@angular/core';
import { InjectService } from './service/inject.service';
import { SelfService } from './service/self.service';
import { MyConfig } from './service/my-config';
import { HttpClient } from '@angular/common/http';
import { utils } from './utils/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-di';
  constructor(
    @Inject(InjectService) public inject: InjectService,
    public idService: SelfService,
    public http: HttpClient
    // public config: MyConfig
  ) {
    // console.log(utils.getBytes('你好啊, aiodjwqepqw'));
    // console.log(this.inject);
    // console.log('id service: ', idService, idService.id);
    // console.log(config);
  }
  Click() {
    // console.log(1);
    // this.http.get("assets/data.json", {
    //   params: {
    //     a: "1"
    //   }
    // })
    // .subscribe(res=>console.log(res));
  }
}
