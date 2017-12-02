import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  myContacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.myContacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
        this.myContacts.push(this.newContact)
    for(let key in this.newContact){
      this.newContact[key] = "";
    }
  }
}
