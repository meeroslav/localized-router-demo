import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentRouterModule } from '@angular-component/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TranslateModule } from './translate/translate.module';
import { LanguageComponent } from './language.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, LanguageComponent],
  imports: [
    BrowserModule,
    ComponentRouterModule.forRoot(),
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
