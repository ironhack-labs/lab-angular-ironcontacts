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

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log(this.newContact);
    this.contacts.push(this.newContact);
    this.newContact = {};
  }
}


// <input type="text" [(ngModel)]="newContact.name">


//   <input type="text" [(ngModel)]="newContact.email">


//   <input type="text" [(ngModel)]="newContact.phoneNumber">


//   <input type="text" [(ngModel)]="newContact.image">
