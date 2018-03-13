import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import contactList from '../contacts';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  removeContact(name) {
    this.contacts = this.contacts.filter(
      (contact) => contact.name !== name
    );
    console.log("father", this.contacts);
  }


  addContact() {
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    this.newContact = {};
  }
};
