import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLoadRoutingModule } from './first-load-routing.module';
import { FirstComponent } from './first/first.component';
import { HighComponent } from './high/high.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [FirstComponent, HighComponent, SecondComponent],
  imports: [
    CommonModule,
    FirstLoadRoutingModule
  ]
})
export class FirstLoadModule { }
