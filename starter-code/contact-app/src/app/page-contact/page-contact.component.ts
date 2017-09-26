import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  visibleForm = false
  buttonName ="Add Contact"

  toggleForm() {
    this.visibleForm = !this.visibleForm
    if (this.buttonName === "Add Contact") {
      this.buttonName = "Close Form"
    } else {
      this.buttonName = "Add Contact"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
