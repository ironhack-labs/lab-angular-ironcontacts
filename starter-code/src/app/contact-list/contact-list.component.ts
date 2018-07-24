import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Object>

  newContact: Object = {}

  ngOnInit() {
    this.contacts = contactList;
  }
 

  addContact(){
    this.contacts.push(this.newContact);
    this.newContact = {}
  }
}
