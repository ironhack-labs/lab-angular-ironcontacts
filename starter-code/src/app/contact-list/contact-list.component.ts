import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<onePersonne>;
  newContact: onePersonne = new onePersonne();

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    this.newContact =  new onePersonne();
  }
}

class onePersonne {
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
}
