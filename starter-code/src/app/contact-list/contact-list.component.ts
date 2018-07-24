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

  addContact(name, email, phonenumber, image){
    console.log("Add contact has been called for ", name);
    // add contact to contacts list
    // clear inputs
    this.contacts.push({
      name: name.value,
      email: email.value,
      phoneNumber: phonenumber.value,
      image: image.value
    })
  }

}
