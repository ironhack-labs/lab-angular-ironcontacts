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

  addContact(name,email,phoneNumber,image){
    console.log("Add contact has been called");
    contactList.push({name,email,phoneNumber,image});
    
    console.log (name,email,phoneNumber,image);
    // clear inputs
  }
}
