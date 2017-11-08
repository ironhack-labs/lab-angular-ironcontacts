import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';


@Component({
  selector: 'app-contact-directory',
  templateUrl: './contact-directory.component.html',
  styleUrls: ['./contact-directory.component.css'],
})
export class ContactDirectoryComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};
  constructor() {

  }

  ngOnInit() {
    this.contacts = contactList;
  }

addContact(name, email, phoneNumber, image:string){
  let newContact = {
  name: name,
  email: email,
  phoneNumber: phoneNumber,
  image: image
}
contactList.push(newContact);

}



}
