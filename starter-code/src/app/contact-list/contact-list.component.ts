import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  //newContact: Object = {};

  newContact: Contact = new Contact();

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    // clear inputs
    this.newContact = {
      name: this.newContact.name,
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image
    };

    this.contacts.push(this.newContact);
  }
}


class Contact{
  constructor (
    public name: string = "",
    public email: string = "", 
    public phoneNumber: string = "",
    public image: string = ""
  ){}
}