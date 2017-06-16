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

  addContact(inputname: string, inputemail:string, inputphone:string, inputimg:string) {
    console.log("Add contact has been called");
    console.log(inputname, inputemail, inputphone, inputimg);
    contactList.push({
      name: inputname,
      email:inputemail,
      phone:inputphone,
      image:inputimg
    })
    // add contact to contacts list
    // clear inputs
  }
}
