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

  handleAddClick(){
    // console.log("Add contact has been called");
    this.newContact = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      image: this.image };

    this.contacts.push(newContact)
      
    // this.name: '';
    // this.email: '',
    // this.phoneNumber: '',
    // this.image: '';
    

    // add contact to contacts list
    // clear inputs
  }
}
