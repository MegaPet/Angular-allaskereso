import { Component, Input, Output } from '@angular/core';
import { TitleCardComponent } from './title-card/title-card.component';

@Component({
  selector: 'app-home',
  imports: [ TitleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
}
