import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})

export class SortListPipe implements PipeTransform {

  transform(array: any[], key?: string, order?: string): any {
    array = array || [];

    array.sort((a: any, b: any) => {
      const aVal = order === 'desc' ? (key ? b[key] : b) : (key ? a[key] : a);
      const bVal = order === 'desc' ? (key ? a[key] : a) : (key ? b[key] : b);
      if (aVal < bVal) return -1;
      else if (aVal > bVal) return 1;
      return 0;
    });
    
    return array;
  }

}
