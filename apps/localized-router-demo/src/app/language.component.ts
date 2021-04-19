import { RouteParams } from '@angular-component/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'demo-language',
  template: `
  <router>
    <route [path]="'home' | translateRoute | async" [exact]="true">
      <demo-home *routeComponent></demo-home>
    </route>
    <route [path]="'users' | translateRoute | async" [exact]="false" [load]="usersLoader"></route>
    <route [path]="'about' | translateRoute | async">
      <demo-about *routeComponent></demo-about>
    </route>
    <route path="" [redirectTo]="'home' | translateRoute | async"></route>
  </router>
  `,
})
export class LanguageComponent implements OnInit {
  constructor(private readonly translate: TranslateService, private readonly routeParams$: RouteParams<{ lang: string }>) {
  }

  ngOnInit() {
    this.routeParams$.subscribe(({ lang }) => this.changeLanguage(lang));
  }

  usersLoader = () => import('./users/users.module').then(m => m.UsersModule);

  changeLanguage(lang: string) {
    this.translate.language = lang;
  }
}
