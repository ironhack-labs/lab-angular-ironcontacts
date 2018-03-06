import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crazy'
})
export class CrazyPipe implements PipeTransform {
  // the logic of our pipe goes inside the 'transform()' method.

  transform(value: any, args?: any): String {
    // value is always the thing you're modfying

    const strArray = value.split('');
    const crazyString = [];

    strArray.forEach((letter) => {
      const flip = Math.floor(Math.random() * 2);
      if (flip) {
        crazyString.push(letter.toUpperCase());
      } else {
        crazyString.push(letter.toLowerCase());
      }
    });
    const newString = crazyString.join('');
    return newString;
  }

}


