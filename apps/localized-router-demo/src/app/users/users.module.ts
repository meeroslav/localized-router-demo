import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { ComponentRouterModule, ModuleWithRoute } from '@angular-component/router';
import { TranslateModule } from '../translate/translate.module';

@NgModule({
  declarations: [UsersComponent, ProfileComponent, ListComponent, UserComponent],
  imports: [
    CommonModule,
    ComponentRouterModule,
    TranslateModule
  ]
})
export class UsersModule implements ModuleWithRoute {
  routeComponent = UsersComponent;
}
