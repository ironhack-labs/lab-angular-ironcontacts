//Import Pipe and PipeTransform (interface)
import { Pipe, PipeTransform } from '@angular/core';
//import { contacts } from './contact-list/contact-list.component';
//Decorator to dress up CapitalizePipe class that will be exported
@Pipe({
  name: 'SearchPipe',
  pure: false
})

//The Exported class implements the PipeTransform INTERFACE
export class SearchPipe implements PipeTransform {
  //Steps to capitalize the string
  transform(items: any[], field: string, value: string): any[] {
     console.log(items, field, value);
    //  if (!items) {
    //    return [];
    //  }
    //  if (!value) {
    //    return items;
    //  }
    //  console.log(items.filter(it => it[field].match(new RegExp(value, 'i'))));
    console.log("Searching....");
    return items.filter(it => it[field].match(new RegExp(value, 'i')));

   }
}
