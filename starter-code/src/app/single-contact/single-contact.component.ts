import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

 @Input() singleContact: any;
 @Output() contactBeingDeleted = new EventEmitter();

  deleteContact(theContact) {
    this.contactBeingDeleted.emit(theContact);
  }

  constructor() { }

  ngOnInit() {}

}
