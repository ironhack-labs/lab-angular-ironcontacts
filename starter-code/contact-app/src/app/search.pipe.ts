import { Pipe, PipeTransform } from '@angular/core';
import { contactInterface } from './contact-list/contactInterface.js';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {



  transform(searchInput: string, contacts: Array<contactInterface>): any {
    return contacts.filter((contact) => { contact.name.includes(searchInput) });
  }

}
