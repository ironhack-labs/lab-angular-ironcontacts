import { Component, OnInit } from '@angular/core';
import contacts from '../contacts';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contacts;
  }

  addContact(){
    // add contact to contacts list
    // clear inputs
    console.log("Add contact has been called");
    console.log(this.contacts);
    console.log(this.newContact);

    this.contacts.push(this.newContact);

    this.newContact = {};
  }
}
