import { Component} from '@angular/core';
import { contacts} from './contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fakeContacts: Object[] = contacts;

  title = 'Fake Contacts Jurassic Park';
}
