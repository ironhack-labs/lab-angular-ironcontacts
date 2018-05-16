import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { SingleContactComponent } from '../single-contact/single-contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
<<<<<<< HEAD
  contacts: Object[] = [];
  newContact: Object = {};
=======
  contacts: Object[];
  newContact: any = {name: '',
        email: '',
        phoneNumber: '',
        image: ''
    };
>>>>>>> 2c57b243356ff2ea6f369703457dec436b5bad6a

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

<<<<<<< HEAD
  aNewContact = { name: '', email: '', phoneNumber: '', image: '' };

  addContact() {
    console.log('Add contact has been called');
    // add contact to contacts list
    const newContact = {
      name: this.aNewContact.name,
      email: this.aNewContact.email,
      phoneNumber: this.aNewContact.phoneNumber,
      image: this.aNewContact.image
    };
=======
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

>>>>>>> 2c57b243356ff2ea6f369703457dec436b5bad6a
    // clear inputs
    this.contacts.unshift(newContact);
  }

  deleteTheContact(entireContact) {
    const i = this.contacts.indexOf(entireContact);
    this.contacts.splice(i, 1);
  }
}
