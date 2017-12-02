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

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(name: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement, image: HTMLInputElement): boolean {
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    this.newContact = {
      name: name.value,
      email: email.value,
      phoneNumber: phone.value,
      image: image.value
    }
    name.value = '';
    email.value = '';
    phone.value = '';
    image.value = '';
    return false;
    // add contact to contacts list
    // clear inputs
  }
}
