import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLoadRoutingModule } from './first-load-routing.module';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstLoadRoutingModule
  ]
})
export class FirstLoadModule { }
