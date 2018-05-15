import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: any = {name: '',
        email: '',
        phoneNumber: '',
        image: ''
    };

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact():void{
    console.log("Add contact has been called");
    const newOne = {name: this.newContact.name, 
      email: this.newContact.email, 
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image
      
    };
    this.newContact.name = '';
    this.newContact.email = '';
    this.newContact.phoneNumber = '';
    this.newContact.image = '';

    this.contacts.push(newOne);

    // clear inputs
  }
}
