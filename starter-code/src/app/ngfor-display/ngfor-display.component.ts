import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-ngfor-display',
  templateUrl: './ngfor-display.component.html',
  styleUrls: ['./ngfor-display.component.css']
})
export class NgforDisplayComponent implements OnInit {
  contacts: Object[];
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;

  }

}
