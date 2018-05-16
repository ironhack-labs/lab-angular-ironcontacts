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


  // tslint:disable-next-line:max-line-length
  newContact: any = {name: '', email: '', phoneNumber: '', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'};


  deleteTheContact(theWholeContact){
    const index = this.contacts.indexOf(theWholeContact);
    this.contacts.splice(index, 1);
  }


  addContact():void{
    // add contact to contacts list
    const theNewContact:any = {name: this.newContact.name, email:  this.newContact.email, phoneNumber: this.newContact.phoneNumber, image: this.newContact.image};

    this.contacts.unshift(theNewContact);

    // clear inputs

    this.newContact.name = '';
    this.newContact.email = '';
    this.newContact.phoneNumber = '';
  }
}
