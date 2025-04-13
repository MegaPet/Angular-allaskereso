import {
  Component,
  EventEmitter,
  inject,
  Input,
  numberAttribute,
  Output,
  Renderer2,
} from '@angular/core';
import { Allas } from '../Allas';
import { provideHttpClient } from '@angular/common/http';
import jsonData from '../../../../assets/db/dummy/db.json';
import { MatTableModule } from '@angular/material/table';
import { Allas_filter } from '../Allas_filter';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { HighlightDirective } from '../../../directives/highlight.directive';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule, MatRadioModule, MatCardModule, HighlightDirective],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  _filter: Allas_filter = { allas_kulcsszo: '', allas_telepules: '' };
  _work_offers_db: Allas[] = jsonData.work_offers;
  _filtered_work_offers: Allas[] = [];
  displayedColumns: string[] = [
    'title',
    'location',
    'keywords',
    'salary',
    'experience',
    'description',
  ];
  is_mappped = false;
  renderer = inject(Renderer2);

  @Input()
  set filter(filter: Allas_filter) {
    this._filter = filter;
    console.log(filter);
    this._filtered_work_offers = [];

    //TODO JSON "ÁTVILÁGÍTÁS"
    for (const [index, work_offer] of Object.entries(this._work_offers_db)) {
      if (
        work_offer.location.toLowerCase() ===
        this._filter.allas_telepules.toLowerCase()
      ) {
        for (const key_word of work_offer.keywords) {
          if (key_word == this._filter.allas_kulcsszo) {
            this._filtered_work_offers.push(work_offer);
          }
        }
      }
    }

    if (this._filtered_work_offers.length > 0) {
      this.is_mappped = true;
    }
  }

  constructor() {
    // this.onThemeChange('light');
  }

  onThemeChange(color: 'light' | 'dark') {
    const tableElement = document.querySelector('table');
    const td = document.getElementsByTagName('td');
    if (color == 'light') {
      this.renderer.removeClass(tableElement, 'dark');
      this.renderer.addClass(tableElement, 'light');
    } else {
      this.renderer.removeClass(tableElement, 'light');
      this.renderer.addClass(tableElement, 'dark');
    }
  }
}
