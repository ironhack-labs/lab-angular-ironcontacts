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
    console.log("Me arranco too flama");
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    console.log(this.newContact);
    this.contacts.push(this.newContact);
    this.newContact = {};
    // add contact to contacts list
    // clear inputs
  }
}
