import { Component } from '@angular/core';

@Component({
  template: `
    <router>
      <route path="/">
        <demo-list *routeComponent></demo-list>
      </route>
      <route path="/:user">
        <demo-user *routeComponent></demo-user>
      </route>
      <route path="/:user/profile">
        <demo-profile *routeComponent></demo-profile>
      </route>
    </router>
  `,
})
export class UsersComponent { }
