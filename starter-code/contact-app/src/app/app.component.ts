import undefined from './contacts';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Component } from '@angular/core';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PP Iron Contacts';

}