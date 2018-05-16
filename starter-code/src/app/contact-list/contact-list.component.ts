import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { SingleContactComponent } from '../single-contact/single-contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  // contacts: Array<any>;
  contacts: Object[];

  newContact = {name: '', email: '', phoneNumber: '', image: ''};

  addContact() {
    const addedContact = {
      name: this.newContact.name,
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image
    };
    this.contacts.push(addedContact);
    // clear inputs
    console.log('Add contact has been called');
  }

  ngOnInit() {
    this.contacts = contactList;
    
  }
}

