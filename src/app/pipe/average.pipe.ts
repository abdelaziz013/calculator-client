import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: any, ): any {
    return `"The average is ${value}"`;
  }

}
