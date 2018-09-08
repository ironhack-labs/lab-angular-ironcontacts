import { Component } from '@angular/core';
import {Contact} from '../shared/models/contact.model' 
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Array<Contact> = contactList;
  newContact: Contact = new Contact;

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    // clear inputs
  }
}
