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

  addContact(name,email,phoneNumber,image:string){
    console.log("Add contact has been called");
    console.log(name,email,phoneNumber,image)
    let newContact={
    name:name,
    email:email,
    phoneNumber:phoneNumber,
    image:image
    }
    contactList.push(newContact);
    // add contact to contacts list
    // clear inputs
  }
}
