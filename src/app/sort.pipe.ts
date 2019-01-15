import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    const sortedServers = value.sort((a: any, b: any) => {
      return a[propName].localeCompare(b[propName]);
    });
    return sortedServers;
  }

}
