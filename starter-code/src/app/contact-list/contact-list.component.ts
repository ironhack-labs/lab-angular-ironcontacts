import { Component, OnInit } from '@angular/core';
import contacts from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Object>;
  newContact: Object = {Message};

  constructor() { }

  ngOnInit() {
    this.contacts = contacts;
  }

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    contacts.push(this.newContact)

    // clear inputs
  }
}

class Message {
  name: string;
  email: string;
  phoneNumber: string;
  image: string
}
