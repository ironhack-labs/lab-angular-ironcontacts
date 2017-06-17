import { Component, OnInit } from '@angular/core';
import contacts from '../contacts'

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contactsList = contacts;
  constructor() { }

  ngOnInit() {
  }

}
