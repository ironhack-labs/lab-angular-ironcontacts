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

  addContact(name: HTMLInputElement, email: HTMLInputElement , phone: HTMLInputElement, image: HTMLInputElement){
    console.log("Add contact has been called");
    this.newContact = {
     name: name.value,
     email: email.value,
     phone: phone.value,
     image: image.value
      };
     this.contacts.push(this.newContact);

      name.value = ' empt' ;
      email.value = ' empt';
      phone.value = 'empt ';
      image.value = 'empt ';
      return false;
  }
}
