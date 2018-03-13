import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: {
    name: string,
    email: string,
    phone: string,
    image: string,
  };

  constructor() {
  }

  ngOnInit() {
    this.newContact = {
      name: '',
      email: '',
      phone: '',
      image: '',
    }
    this.contacts = contactList;
  }

  addContact() {
    this.contacts.push(this.newContact);
    this.newContact = {
      name: '',
      email: '',
      phone: '',
      image: '',
    }
  }
}
