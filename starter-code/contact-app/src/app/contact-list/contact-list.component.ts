import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Object>;
  newContact: Object = {};
  deleteContactName:string = "";

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    this.newContact = {};
  }

  identifyArray(){
    var array = this.contacts.map((e)=>e);
    console.log(array[0]);
    var first = array[0];
    console.log(typeof(first));
  }
}
