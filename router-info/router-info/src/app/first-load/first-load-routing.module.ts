import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HighComponent } from './high/high.component';
import { SecondComponent } from './second/second.component';
import { IdResloveService } from '../common/id-reslove.service';
import { LeaveGuard } from '../common/leave.guard';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'high/:id',
    component: HighComponent,
    resolve: {
      purInfo: IdResloveService
    },
    data: {
      animation: 'detail'
    }
  },
  {
    path: 'second',
    component: SecondComponent,
    data: {
      animation: 'second'
    },
    canDeactivate: [LeaveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLoadRoutingModule { }
