import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[];
  newContact: any = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }
  
  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    this.contacts.push(this.newContact);
    // clear inputs
    console.log(this.contacts);
    this.newContact = {};
    
  }
  
}


/*
let x = 0;
let y = 1;
let z = 2;
class object {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const what = new object(x, y, z)
class object {
  costructor(a, b, c) {
    this.a = b;
    this.b = c;
    this.c = a;
  }
}
console.log(what.a)
*/
