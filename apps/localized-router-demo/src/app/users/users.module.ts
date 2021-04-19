import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { ComponentRouterModule, ModuleWithRoute } from '@angular-component/router';

@NgModule({
  declarations: [UsersComponent, ProfileComponent, ListComponent, UserComponent],
  imports: [
    CommonModule,
    ComponentRouterModule
  ]
})
export class UsersModule implements ModuleWithRoute {
  routeComponent = UsersComponent;
}
