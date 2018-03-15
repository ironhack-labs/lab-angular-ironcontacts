import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: any = [];
  @Output() onDelete = new EventEmitter<string>();
    constructor() { }

  ngOnInit() {

  }

  removeContact() {
    this.onDelete.emit(this.contact.name)
    // console.log(this.contact.name);
  }

}
