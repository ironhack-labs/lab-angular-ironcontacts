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
  feedbackEnabled= false;
  processing = false;

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(form){
    if(form.valid){
      this.contacts.push(this.newContact);
      this.feedbackEnabled = false;
      this.newContact = '';
    } else {
      this.feedbackEnabled = true;
    }
    
    // add contact to contacts list
    // clear inputs
  }
}
