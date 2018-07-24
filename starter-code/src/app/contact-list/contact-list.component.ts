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

  addContact(a,b,c,d){
    console.log("Add contact has been called");
    let newUser = {name: a.value, email: b.value, phoneNumber: c.value, image: d.value}
    this.contacts.push(newUser);
    a.value ="";
    b.value ="";
    c.value ="";
    d.value ="";
  }
}
