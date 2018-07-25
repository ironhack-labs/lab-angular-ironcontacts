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
 
    addContact = function() {
      console.log("Add contact has been called");
      let newCont: {} = {
        name: this.newContact.name,
        email: this.newContact.email,
        phoneNumber: this.newContact.phoneNumber,
        image: this.newContact.image,
      }
      this.contacts.push(newCont);
      this.newContact.name = ''
      this.newContact.email = ''
      this.newContact.phoneNumber = ''
      this.newContact.image = '' //"http://lorempixel.com/640/480/nature"
    }
    
    
  }


