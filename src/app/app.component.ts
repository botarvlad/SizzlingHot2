import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggle: boolean = false;

  seeControlls() {
    this.toggle = !this.toggle;
  }
}
