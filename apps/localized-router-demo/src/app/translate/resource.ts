export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'rs', name: 'Srpski' }
];
export const DEFAULT_LANGUAGE = 'en';

export type Resource = { [key: string]: string | Resource };

export const TRANSLATION_RESOURCE: Resource = {
  en: {
    app: 'Angular localized routing demo',
    routes: {
      home: 'home',
      about: 'about',
      users: 'users',
      profile: 'profile'
    },
    homeTitle: 'Home',
    homeText: 'Nothing to see here, go to About or Users',
    usersTitle: 'Users',
    userTitle: 'User',
    profileTitle: 'Profile',
    allUsers: 'All users',
    backToUser: 'Back to user',
    aboutTitle: 'About',
    aboutText: 'This application is a showcase of the route localization using an @angular-component/router and a very trivial square-wheel translation.',
  },
  rs: {
    app: 'Demo za angular lokalizovane putanje',
    routes: {
      home: 'pocetna',
      about: 'onama',
      users: 'korisnici',
      profile: 'profil'
    },
    homeTitle: 'Početna',
    homeText: 'Ovde nema šta da se vidi, kliknite na O nama ili Korisnici',
    usersTitle: 'Korisnici',
    userTitle: 'Korisnik',
    profileTitle: 'Profil',
    allUsers: 'Svi korisnici',
    backToUser: 'Natrag na korisnika',
    aboutTitle: 'O nama',
    aboutText: 'Ova aplikacija je prikaz lokalizacije putanja korišćenjem @angular-component/router-a i vrlo trivijalne implementacije prevodioca'
  }
};
