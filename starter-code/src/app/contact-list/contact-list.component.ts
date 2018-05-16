import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

  aNewContact = { name: '', email: '', phoneNumber: '', image: '' };

  addContact() {
    console.log('Add contact has been called');
    // add contact to contacts list
    const newContact = {
      name: this.aNewContact.name,
      email: this.aNewContact.email,
      phoneNumber: this.aNewContact.phoneNumber,
      image: this.aNewContact.image
    };
    // clear inputs
    this.contacts.unshift(newContact);
  }

  removeContact (email) {
    this.contacts = this.contacts.filter(
      (contact: any) => contact.email !== email
    );
  }


}