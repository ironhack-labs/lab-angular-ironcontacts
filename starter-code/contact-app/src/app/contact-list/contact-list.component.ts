import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[] = contactList;
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    if (this.newContact) {
      this.contacts.push(this.newContact);
      alert('contact added!')
    } else {
      console.log('oops')
    }
  }
}
