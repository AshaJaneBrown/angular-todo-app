import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isNavbarActive = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
}
