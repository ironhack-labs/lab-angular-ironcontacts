import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Object>= [];
  newContact: Object = {};

  constructor() {this.contacts = contactList;}

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log(this.newContact);
    console.log("Add contact has been called");
    // add contact to contacts list
    this.contacts.push(this.newContact);
    console.log(this.contacts);
    // clear inputs
    this.newContact = [];
    
  }
}
