import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:Array<any> = [];
  newContact = {name: '', email: '', phoneNumber: '', image: ''};
  
  addContact(): void{
    console.log("Add contact has been called");
    const newOne = 
    {name: this.newContact.name,
     email: this.newContact.email,
     phoneNumber: this.newContact.phoneNumber,
     image: this.newContact.image,
    }
    this.contacts.unshift(newOne);
    this.newContact.name = "";
    this.newContact.email = ""
    this.newContact.phoneNumber = ""
    this.newContact.image = ""
  }

  deleteTheContact(entireContact) {
    const index = this.contacts.indexOf(entireContact);
    this.contacts.splice(index, 1);
  }

  constructor() { }
  
  ngOnInit() {
    this.contacts = contactList;
  }
}