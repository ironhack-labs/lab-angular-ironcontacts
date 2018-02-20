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
  feedbackEnabled = false;  

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(form){
    console.log("Add contact has been called");
    
    if (form.valid) {
      contactList.push(this.newContact);
      this.newContact = {};
      this.feedbackEnabled = false;  
    }else {
      this.feedbackEnabled = true;  
    }    
  }
}
