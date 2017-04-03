import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {
  };
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(name, email, phone, image){
    console.log("Add contact has been called");
    console.log(name, email, phone, image);
    this.contacts.push(this.newContact);
    this.newContact = {}
  }
}
