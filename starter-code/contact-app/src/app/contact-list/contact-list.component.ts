import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'emi-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  emiContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    // console.log("Add contact has been called");
    // add contact to contacts list
    this.contacts.push(this.emiContact);
    // clear inputs
    this.emiContact= {}; // creating a new object
  }
}
