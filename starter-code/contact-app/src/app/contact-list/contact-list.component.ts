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

  addContact(name: string, email:string, phone:string, image:string){
    console.log("Add contact has been called");
    contactList.push({
      name: name,
      email: email,
      phone: phone,
      image: image
      })
    // add contact to contacts list
    // clear inputs
  }
}
