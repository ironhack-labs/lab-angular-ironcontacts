import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  
  
  
  constructor() { }
  
  ngOnInit() {
    this.contacts = contactList;
  }
  
  
  
  
  
  
  newContact:any = {name: '', email: '', phoneNumber: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'};


  addContact():void{
    // add contact to contacts list
    const theNewContact:any = {name: this.newContact.name, email:  this.newContact.email, phoneNumber: this.newContact.phoneNumber, image: this.newContact.image};

    this.contacts.push(theNewContact);

    // clear inputs

    this.newContact.name = '';
    this.newContact.email = '';
    this.newContact.phoneNumber = '';
  }
}
