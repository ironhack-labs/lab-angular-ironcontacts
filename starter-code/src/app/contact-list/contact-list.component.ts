import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact =  {name: '', email: '', phoneNumber: ''};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
const newContact = {name: this.newContact.name, email: this.newContact.email, phoneNumber: this.newContact.phoneNumber };
this.contacts.push(newContact);
    // add contact to contacts list
    // clear inputs
  }
}