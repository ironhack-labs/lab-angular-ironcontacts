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
  feedbackEnabled: Boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(form){
    if (form.valid) {
      this.contacts.push(this.newContact);
      this.newContact = "";
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }

    // add contact to contacts list
    // clear inputs
  }
}
