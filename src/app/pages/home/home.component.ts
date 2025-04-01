import { Component, Input, Output } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { TitleCardComponent } from './title-card/title-card.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, TitleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
}
