import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./shared/menu/menu.component";
import { SearchComponent } from './pages/search/search.component';
import { ProfileComponent } from './pages/profile/profile.component';

@Component({
  selector: 'root',
  imports: [/*RouterOutlet,*/ HomeComponent, MenuComponent, SearchComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = "ProfSession"

  current_page = "keres";

  change_page(page: string) : void{
    this.current_page = page;
  }
}
