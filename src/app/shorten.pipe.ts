import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string): any {
    if (value.length > 15) {
      return value.substr(0, 15) + '...';
    } else {
      return value;
    }
  }

}
