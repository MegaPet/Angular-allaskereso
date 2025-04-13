import { Component, Input, Output } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { EventEmitter } from '@angular/core';
import { Allas } from './Allas';
import { HttpClientModule } from '@angular/common/http';
import { Allas_filter } from './Allas_filter';

@Component({
  selector: 'app-search',
  imports: [SearchFormComponent, DataTableComponent, HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  allas: Allas_filter = { allas_kulcsszo: '', allas_telepules: '' }
  
  set_allasok(filter: [string, string]) {
    this.allas = {
      allas_kulcsszo: filter[0],
      allas_telepules: filter[1],
    };
  }
}
