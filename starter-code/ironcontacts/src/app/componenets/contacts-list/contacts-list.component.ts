import { Component, OnInit } from '@angular/core';
import contactsList from '../../shared/data/contacts.data';
import {Contact} from '../../shared/models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent{
contacts: Array<Contact> = contactsList;
newContact: Contact = new Contact;

addContact():void {
  this.contacts.push(this.newContact);
  this.newContact = new Contact();

  }
  // add contact to contacts list
  // clear inputs

};