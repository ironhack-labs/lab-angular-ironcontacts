import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(input: string, contacts: Array<any> ): any {
    let target = null;
    contacts.forEach((contact)=> {
      if (contact.name === input) {
        target = contact;
      }
    });
    if (target !== null) {
      return target;
    }
    else return {
      name: "Name not found",
      email: '',
      phoneNumber: '',
      image: ''
    }
  }

}
