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

  // addContact(name1, email1, phonenumber1, image1){
  //   console.log(name1.value, email1.value, phonenumber1.value, image1.value);
  //   this.contacts.push({
  //     name:name1.value, 
  //     email:email1.value, 
  //     phoneNumber: phonenumber1.value, 
  //     image: image1.value
  //   })
    addContact(){
      console.log(this.newContact);
      this.contacts.unshift(this.newContact);
    // add contact to contacts list
    // clear inputs
  }
}
