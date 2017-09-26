import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  contactList: any = contactList;
  newContact: any = {};


  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    this.newContact = {
      name: this.newContact.name,
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image
    }
    this.contacts.push(this.newContact);
  }
}

console.log(contactList)
