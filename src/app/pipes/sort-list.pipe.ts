import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})

export class SortListPipe implements PipeTransform {

  transform(array: any[], field?: string): any {
    array = array || [];
    
    if (field)
      array.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    else
      array.sort((a: any, b: any) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
    return array;
  }

}
