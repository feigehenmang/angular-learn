import { Component, Inject } from '@angular/core';
import { InjectService } from './service/inject.service';
import { SelfService } from './service/self.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-di';
  constructor(
    @Inject(InjectService) public inject: InjectService,
    public idService: SelfService
  ){
    console.log(this.inject);
    console.log("id service: ", idService, idService.id);
  }
}
