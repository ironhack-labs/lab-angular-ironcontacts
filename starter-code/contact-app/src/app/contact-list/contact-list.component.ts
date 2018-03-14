import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[];
  newContact: {
    name: string,
    email: string,
    phoneNumber: string,
    image: string,
  };

  constructor() {
    this.newContact = {
      name: "",
      email: "",
      phoneNumber: "",
      image: ""
    };
  }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    this.contacts.push(this.newContact);
    this.newContact = {
      name: "",
      email: "",
      phoneNumber: "",
      image: ""
    };
  }

  removeContact = (name) => {
    console.log(name);
    this.contacts = this.contacts.filter( (contact) => {
      return contact.name !== name;
    })
  }
}
