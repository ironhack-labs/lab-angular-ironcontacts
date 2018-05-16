import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts = [];
  newContact = {name: '', email: '', phoneNumber: '', image: ''};

  addContact(): void {
    console.log("Add contact has been called");
    const newOne = {name: this.newContact.name,
     email: this.newContact.email,
     phoneNumber: this.newContact.phoneNumber,
     image: this.newContact.image,
    }
    this.contacts.push(newOne);
    this.newContact.name = '';
    this.newContact.email = '';
    this.newContact.phoneNumber = '';
    this.newContact.image = '';
  }

  deleteContact(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }
}
