import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  newContact: Object = {};
  contacts: Object[];

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    this.contacts.unshift(this.newContact);
    this.newContact = {}
  }
}
