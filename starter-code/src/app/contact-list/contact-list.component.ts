import { Component, OnInit } from "@angular/core";
import contactList from "../contacts";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(formContact) {
    console.log(`Add contact has been called ${formContact.name}`);

    this.newContact = {
      name: formContact.name,
      email: formContact.email,
      phoneNumber: formContact.phoneNumber,
      image: formContact.image
    };

    // add contact to contacts list
    this.contacts.push(this.newContact);

    // clear inputs
    this.newContact = {};
  }
}
