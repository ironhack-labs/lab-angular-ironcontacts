import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

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

  addContact(name, email, phoneNumber, image){
    console.log("Add contact has been called");
    this.contacts.push({
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      image: image.value
    })
    
    name.value = '';
    email.value = '';
    phoneNumber.value = '';
    image.value = '';
  }
}
