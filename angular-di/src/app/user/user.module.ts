import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule
  ],
  exports: [UserListComponent],
  providers: [UserService]
})
export class UserModule { }
