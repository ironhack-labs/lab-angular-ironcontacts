import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

  @Input() theContact: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onContactDelete() {
    this.onDelete.emit(this.theContact.email);
  }

}
