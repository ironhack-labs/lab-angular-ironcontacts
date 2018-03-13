import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: any;
  @Output() onDelete = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  OnContactDelete () {
    this.onDelete.emit(this.contact.name);
  }

}
