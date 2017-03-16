//Import Pipe and PipeTransform (interface)
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe',
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    console.log(items, field, value)
    // if(!items) {
    //   return [];
    // }
    return items.filter(it => it[field].match(new RegExp(value,
    'i')))
  }
}
