import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  nav_title:string;
  

  constructor(){
    this.nav_title = "ProfSession";
    document.title = this.nav_title;
  }
}
