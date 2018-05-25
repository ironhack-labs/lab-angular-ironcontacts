import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { SingleContactComponent } from '../single-contact/single-contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[] = [];
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

  deleteTheContact(entireContact) {
    const i = this.contacts.indexOf(entireContact);
    this.contacts.splice(i, 1);
  }
}
