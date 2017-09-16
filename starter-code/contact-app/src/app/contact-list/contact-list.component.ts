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
  nameValidation: String = "";
  messageName: String = "";
  emailValidation: String = "";
  messageEmail: String = "";
  phoneValidation: String = "";
  messagePhone: String = "";
  urlValidation: String = "";
  messageUrl: String = "";
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    console.log("Add contact has been called");
    this.contacts.push(this.newContact);
    this.newContact = {};
  }

  validateName(event) {
    let rgExp = new RegExp("^[a-zA-Z\s]*$");
    if(rgExp.test(event.target.value)) {
      this.messageName = "Text OK"
      this.nameValidation = "text-success";
    } else {
      this.messageName = "Text Error"
      this.nameValidation = "text-danger";
    }
  }
  validateEmail(event) {
    let rgExp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    if(rgExp.test(event.target.value)) {
      this.emailValidation = "text-success";
      this.messageEmail = "Email OK"
    } else {
      this.emailValidation = "text-danger";
      this.messageEmail = "Email Error"
    }
  }
  validatePhone(event) {
    let rgExp = new RegExp('^[0-9\s]*$');
    if(rgExp.test(event.target.value)) {
      this.phoneValidation = "text-success";
      this.messagePhone = "Phone OK"
    } else {
      this.phoneValidation = "text-danger";
      this.messagePhone = "Phone Error"
    }
  }
  validateURL(event) {
    let rgExp = new RegExp('(http|ftp|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?');
    if(rgExp.test(event.target.value)) {
      this.urlValidation = "text-success";
      this.messageUrl = "URL OK"
    } else {
      this.urlValidation = "text-danger";
      this.messageUrl = "URL Error"
    }
  }
}
