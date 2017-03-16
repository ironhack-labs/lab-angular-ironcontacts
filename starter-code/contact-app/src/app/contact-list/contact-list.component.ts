import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

interface Contact {
  name: string,
  email: string,
  phoneNumber: string,
  image: string
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<any> = [];
  newContact: Object = {};

  constructor() {

  }
  ngOnInit() {
    contactList.forEach((contact)=> {
      this.contacts.push(contact);
    });
    console.log(this.contacts);
  }

  addContact(n){
    console.log("Add contact has been called");
    this.contacts.push(n);
  }
}
