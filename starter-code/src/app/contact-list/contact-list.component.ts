import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[] = contactList;
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(newContact){
    console.log("Add contact has been called");
    let newUser = {
      name: newContact.name,  
      email: newContact.email,
      phoneNumber: newContact.phoneNumber,
      image: newContact.image
    }
    this.contacts.push(newUser)
    newContact.name = "";
    newContact.email = "";
    newContact.phoneNumber = "";
    newContact.image = "";
  }
}
