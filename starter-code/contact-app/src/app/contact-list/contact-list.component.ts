import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { contactInterface } from './contactInterface.js'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})


export class ContactListComponent implements OnInit {
  contacts: Object[];

  newContact: contactInterface = {
    name: '',
    email: '',
    phoneNumber: '',
    image: '',
  };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log(this.newContact);
    // add contact to contacts list
    this.contacts.push({  // this refer to the instance of the component
      name: this.newContact.name, // name: here matches {{contact.name}} in ContactListComponent.html
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image
    })
    // clear inputs
    this.newContact.name = '';
    this.newContact.email = '';
    this.newContact.phoneNumber = '';
    this.newContact.image = '';
  }
}
