import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  name: string = "";
  email: string = "";
  phoneNumber: number;
  image: string = "";

  contacts: Object[];
  newContact: Object = {
    name: this.name,
    email: this.email,
    phoneNumber: this.phoneNumber,
    image: this.image

  };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    console.log(this.newContact)
    this.contacts.push(this.newContact);
    this.newContact = {};
    // add contact to contacts list
    // Ithis.newContact{ name, email, phoneNumber, image }=""

    // clear inputs
  }
}
