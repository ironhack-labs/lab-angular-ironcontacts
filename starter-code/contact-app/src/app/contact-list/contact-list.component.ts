import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  newContact: any = {
    name: "Emma",
    email: "dummyEmail",
    phoneNumber: "876",
    image: "url"
  };
  showStatus = false;
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  displayAll() {
    this.showStatus = !this.showStatus;
  }
  addContact(oneContact){
    console.log("Add contact has been called");
    this.contacts.push(
      {
        name: this.newContact.name,
        email: this.newContact.email,
        phoneNumber: this.newContact.phoneNumber,
        image: this.newContact.image
      }
    )
  }
}
