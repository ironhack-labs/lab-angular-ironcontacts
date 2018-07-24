import { Component } from '@angular/core';
import contacts from './contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacto = contacts;
  title = 'app works!';
}

