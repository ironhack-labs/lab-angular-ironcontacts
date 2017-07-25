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

  addContact(){
    // add contact to contacts list
    // clear inputs
    console.log("Add contact has been called");
    console.log();
    this.contacts.push({name: this.newContact["name"], 
    email: this.newContact["email"],
    phoneNumber: this.newContact["phoneNumber"],
    image: this.newContact["image"],
   })
   
  }
}
