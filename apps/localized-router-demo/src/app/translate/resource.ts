export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'rs', name: 'Srpski' }
];
export const DEFAULT_LANGUAGE = 'en';

export type Resource = { [key: string]: string | Resource };

export const TRANSLATION_RESOURCE: Resource = {
  en: {
    routes: {
      home: 'home',
      about: 'about',
      users: 'users',
      profile: 'profile'
    },
    homeTitle: 'Home',
    homeText: 'Nothing to see here, go to About or Users',
    aboutTitle: 'About',
    aboutText: 'This application is a showcase of the route localization using an @angular-component/router and a very trivial square-wheel translation.',
  },
  rs: {
    routes: {
      home: 'pocetna',
      about: 'onama',
      users: 'korisnici',
      profile: 'profil'
    },
    homeTitle: 'Početna',
    homeText: 'Ovde nema šta da se vidi, kliknite na O nama ili Korisnici',
    aboutTitle: 'O nama',
    aboutText: 'Ova aplikacija je prikaz lokalizacije putanja korišćenjem @angular-component/router-a i vrlo trivijalne implementacije prevodioca'
  }
};
