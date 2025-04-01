import { Component } from '@angular/core';
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";
import { SearchFormComponent } from "./search-form/search-form.component";

@Component({
  selector: 'app-search',
  imports: [NavBarComponent, SearchFormComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
