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
  processing = false;
  feedbackEnabled = false;

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    this.contacts.push(this.newContact);
    // clear inputs
    this.newContact = {};
  }
  
  handleClick(form) {
    if (form.valid) {
      this.processing = true;
      this.addContact();
      this.processing = false;
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }
  }

}

