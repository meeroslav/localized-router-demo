import { Component } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'localized-router-demo';
  languages;

  constructor(private readonly translate: TranslateService) {
    this.languages = this.translate.languages;
  }

  usersLoader = () => import('./users/users.module').then(m => m.UsersModule);

  changeLanguage(lang: string) {
    this.translate.language = lang;
  }
}
