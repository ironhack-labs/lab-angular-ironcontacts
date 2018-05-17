import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Array<any>;
  newContact = {
    name: '',
    email: '',
    phoneNumber: '',
    image: '',
  };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    const newOne = {
      name: this.newContact.name,
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image,
    };

    this.contacts.unshift(newOne);
    console.log('Add contact has been called');
  }
  removeContact(email) {
    this.contacts = this.contacts.filter(contact => contact.email !== email);
  }
}
