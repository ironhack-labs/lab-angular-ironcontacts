import { Component, OnInit, Input } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: any = {};
  
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(nameip, emailip, phoneip, imageip){
    console.log("Add contact has been called");
    // add contact to contacts list
    this.newContact.name = nameip;
    this.newContact.email = emailip;
    this.newContact.phone = phoneip;
    this.newContact.image = imageip;
    contactList.push(this.newContact)
    console.log(this.newContact)
    console.log(contactList)
    // clear inputs
  }
}
