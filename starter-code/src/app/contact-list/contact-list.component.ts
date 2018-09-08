import { Component, OnInit } from '@angular/core';
import contacts from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
  contacts: Object[] = contacts;
  newContact: Object = {};

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    // clear inputs
  }
}
