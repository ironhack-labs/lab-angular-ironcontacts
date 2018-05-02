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
    this.contacts.push(this.newContact);
    // add contact to contacts list
    // clear inputs
  }
}

// {
//     name: "Shakira Robel",
//     email: "Ashley_Ritchie@hotmail.com",
//     phoneNumber: "965-144-6018",
//     image: "http://lorempixel.com/640/480/sports"
//   },
