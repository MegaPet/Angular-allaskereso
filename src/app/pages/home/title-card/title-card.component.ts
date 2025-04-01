import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  imports: [],
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.scss'
})
export class TitleCardComponent {
  date = new Date();

  get_date(): string {
    return this.date.toDateString();
  }

  get_month(): string {
    const month_date = this.date.toLocaleString('hu-HU', { month: 'short' });
    return month_date[0].toUpperCase() + month_date.substring(1);
  }

}


