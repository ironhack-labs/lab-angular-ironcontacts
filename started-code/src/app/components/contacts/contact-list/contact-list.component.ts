import { Contact } from './../../../shared/models/contacts.models';
import contacts from './../../../shared/data/contacts.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {

  contacts: Array<Contact> = contacts;
  newContact: Contact = new Contact();

  addContact(): void {
    this.contacts.push(this.newContact);
    this.newContact = new Contact();
  }
}

