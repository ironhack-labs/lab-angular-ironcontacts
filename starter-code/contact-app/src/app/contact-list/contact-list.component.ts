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

  addContact(newContact){
    console.log("Add contact has been called");
    console.log(newContact);
    const newPerson = [{
      name: newContact.name,
      phoneNumber: newContact.phoneNumber,
      email: newContact.email,
      image: newContact.image,
    }];
    console.log(this.contacts);
    this.contacts.push(newPerson);
    // newContact.reset();
    // add contact to contacts list
    // clear inputs
  }
  search(term) {
    console.log(term);
  }
}
