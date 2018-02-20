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
  showErrorMessages = false;
  processing = false;

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  submitForm(form){
    if(form.valid){
      this.addContact();
    }
  }

  addContact(){
    this.contacts.push(this.newContact);
    // Object.keys(this.newContact).forEach((key)=>{
    //   this.newContact[key] = '';
    // });
    console.log("Add contact has been called");
    // add contact to contacts list
    // clear inputs
  }
}
