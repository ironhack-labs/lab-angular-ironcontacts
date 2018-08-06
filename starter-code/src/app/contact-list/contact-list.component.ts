import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

interface IContactObject {
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object [];
  newContact: IContactObject = { name: '', email: '', phoneNumber: '', image: ''};
  errorMessage: string;
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    const {name, email, phoneNumber, image} = this.newContact;
    this.errorMessage = '';
    if ( name !== '' || email !== '' || phoneNumber !== '' || image !== '') {
      this.contacts.push(this.newContact);
    }else{
      this.errorMessage = 'All fields are required!';
    }

    this.newContact = { name: '', email: '', phoneNumber: '', image: ''};
    // add contact to contacts list
    // clear inputs
  }
}
