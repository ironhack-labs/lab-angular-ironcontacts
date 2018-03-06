import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Object[]= contacts;
  newContact: Object = {};


  constructor() { }

  ngOnInit() {
  }


  addContact() {
    console.log('Add contact has been called');
    this.contactList.push(this.newContact);
    console.log(this.contactList);
    this.newContact = {};
    // add contact to contacts list
    // clear inputs
  }
}
