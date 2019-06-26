import { Component, OnInit } from "@angular/core";
import contactList from "../contacts";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {
  contacts: object[];
  newContact: object = {};

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    console.log("Add contact has been called");

    // add contact to contacts list
    if (
      this.newContact["name"] !== undefined &&
      this.newContact["email"] !== undefined &&
      this.newContact["phoneNumber"] !== undefined &&
      this.newContact["image"] !== undefined
    ) {
      this.contacts.unshift(this.newContact);
    }

    // clear inputs
    this.newContact = {};
  }
}
