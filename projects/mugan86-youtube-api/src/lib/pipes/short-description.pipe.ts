import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string, charLimit: number = 150): any {
    return (value.length > charLimit) ? value.substring(0, charLimit).concat('...') : value;
  }

}
