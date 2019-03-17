import { Pipe, PipeTransform } from '@angular/core';
import * as momemnt from 'moment';

@Pipe({
  name: 'datetime'
})

export class DatetimePipe implements PipeTransform {

  transform(time: momemnt.Moment, format?: string): any {
    return time.format(format || 'HH:mm:ss');
  }

}
