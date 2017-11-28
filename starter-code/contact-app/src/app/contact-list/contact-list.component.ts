import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Array<Object> = [{
    name: String,
    email: String,
    phoneNumber: Number,
    image: String
  }];

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log(this.newContact);
    console.log("Add contact has been called");
    this.contacts.unshift(this.newContact);
    // add contact to contacts list
    // clear inputs
    this.newContact = [{}];
  }
}
