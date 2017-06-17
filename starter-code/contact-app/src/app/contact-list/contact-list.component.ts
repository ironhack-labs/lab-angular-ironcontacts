import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {
    name : '',
    email: '',
    phoneNumber: '',
    image: '',
  };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact( name: string, email: string, phoneNumber: string, image: string){
    console.log("Add contact has been called");
    // add contact to contacts list
    // push to contactList
    this.contacts.push( this.newContact );
    // clear inputs
    this.newContact = {};
     
  }
}
