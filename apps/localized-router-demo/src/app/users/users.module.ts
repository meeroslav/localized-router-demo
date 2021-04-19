import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [ProfileComponent, ListComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
