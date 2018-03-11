import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    this.newContact = {};
  }
};
