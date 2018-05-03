import { Component, OnInit } from "@angular/core";
import contactList from "../contacts";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = new Contact();

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    this.newContact = {};
  }
}

class Contact {
  constructor(
    public name: string = "",
    public email: string = "",
    public phoneNumber: string = "",
    public image: string = ""
  ) {}
}
