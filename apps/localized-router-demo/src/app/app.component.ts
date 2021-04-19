import { Component } from '@angular/core';

@Component({
  selector: 'localized-router-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'localized-router-demo';

  usersLoader = () => import('./users/users.module').then(m => m.UsersModule);
}
