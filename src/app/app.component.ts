import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'root',
  imports: [
    RouterOutlet,
    NavBarComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ProfSession';

  is_logged = false;

  
  
  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}
