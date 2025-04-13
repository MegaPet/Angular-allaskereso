import { Component, Input } from '@angular/core';
import { HeroDesignDirective } from '../../../directives/hero-design.directive';
import { MyDatePipe } from '../../../pipes/my-date.pipe';
@Component({
  selector: 'app-title-card',
  imports: [],
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.scss'
})
export class TitleCardComponent {
  date = new Date();



}


