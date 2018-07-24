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

  addContact(newName, newEmail, newPhoneNumber, newImage){
    // add contact to contacts list
    console.log(newName.value, newEmail.value, newPhoneNumber.value, newImage.value);
    this.contacts.push({
      name: newName.value,
      email: newEmail.value,
      phoneNumber: newPhoneNumber.value,
      image: '../assets/contact-image.png'
    });
    // clear inputs
    newName.value = '';
    newEmail.value = '';
    newPhoneNumber.value = '';
    newImage.value = '';
  }
}
