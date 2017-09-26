import { Component, OnInit, Input } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contacts: Object[];

  newContact: Object = {
    name: '',
    email: '',
    phoneNumber: '',
    image: ''
  };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    this.contacts.push(this.newContact)
  }

}
