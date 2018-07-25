import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { resetFakeAsyncZone } from '@angular/core/testing';

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
    this.contacts = contactList;
  }

  addContact(newContact) {
    console.log("Add contact has been called", { newContact });
    this.contacts.push(newContact)
    this.newContact = {}
  }
}