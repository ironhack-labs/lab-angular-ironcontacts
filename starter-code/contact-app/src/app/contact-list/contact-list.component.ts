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
  feedbackEnabled = false;
  processing = false;

  constructor() {}

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(form) {
    this.feedbackEnabled = true;
    if (form.valid) {   
      this.processing = true;   
      this.contacts.push(this.newContact);
      this.newContact = {};
      this.feedbackEnabled = false;
    } else {
      this.feedbackEnabled = true;
    }
  }
}


// export class MyFormComponent implements OnInit {

//   feedbackEnabled = false;
//   processing = false;
//   username = null;
//   password = null;

//   constructor() { }

//   ngOnInit() {
//   }

//   submitForm(form) {
//     this.feedbackEnabled = true;
//     if (form.valid) {
//       this.processing = true;
//       console.log('here we submit the form', theForm);
//       // authService.login(this.username, this.password).
//     }
//   }

// }