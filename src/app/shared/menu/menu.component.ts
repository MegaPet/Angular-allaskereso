import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Output() selected_page: EventEmitter<string> = new EventEmitter();

  send_out(page: string){
    this.selected_page.emit(page);
  }
}
