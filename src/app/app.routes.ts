import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegisterComponent } from './pages/register/register.component';

let title = 'ProfSession';
export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: title + ' | Home' },
  { path: 'profile', component: ProfileComponent, title: title + ' | Profil' },
  { path: 'search', component: SearchComponent, title: title + ' | Keresés' },
  {path: 'log-in', component: LogInComponent, title: title + '| Bejelentkezés'},
  {path: 'register', component: RegisterComponent, title: title + '| Regisztráció'},
  //Mindig a végére.
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
