import { Component, OnInit } from '@angular/core';
import  allContacts from './../../../shared/data/contacts.data';
import { Contact } from './../../../shared/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  contacts: Array<Contact> = [];
  posterPreview: string = '';
  newContact: Contact = new Contact();
  // contacts: Contact[]; // ES LO MISMO
  constructor(){}
  
  ngOnInit(){
    this.contacts = allContacts;    
  }
  
  onClickAddContact(name:string, email:string, phoneNumber:string, image:string){
    this.contacts.push({name, email, phoneNumber, image});
    this.posterPreview = '';
    // this.newContact = new Contact(); // COMO LIMPIAR CAMPO???

    //OR===>>>
    // this.newContact.name = name;
    // this.newContact.email = email;
    // this.newContact.phoneNumber = phoneNumber;
    // this.newContact.image = image;
    // this.contacts.push(this.newContact);
  }
  
  onChangePosterInput(image:string){    
    this.posterPreview = image;
  }
}

