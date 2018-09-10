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
  contactToCreate: Contact = new Contact();
  // contacts: Contact[];
  constructor(){}
  
  ngOnInit(){
    this.contacts = allContacts;    
  }
  
  onClickAddContact():void{
    this.contacts.push(this.contactToCreate);
    this.contactToCreate = new Contact();
    this.posterPreview = '';
  }
  
  //NO NECESARIO USANDO NGMODEL
  // onChangePosterInput(image:string){    
  //   this.posterPreview = image;
  // }
}

