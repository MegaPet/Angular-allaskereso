import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatNavList,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  nav_title: string;
  @Input() sidenav!: MatSidenav;
  @Input({ required: true }) is_logged = false;

  constructor() {
    this.nav_title = 'ProfSession';
    document.title = this.nav_title;
  }

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
