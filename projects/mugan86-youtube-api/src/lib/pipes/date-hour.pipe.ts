import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateHour'
})
export class DateHourPipe implements PipeTransform {

  transform(data: string): string {
    const date = new Date(data);
    const dayOfMonth = this.formatNumbers(date.getDate());
    const month = this.formatNumbers(date.getMonth() + 1 );
    const year = date.getFullYear();

    const hour = this.formatNumbers(date.getHours());
    const mins = this.formatNumbers(date.getMinutes());
    return `${dayOfMonth}-${month}-${year} ${hour}:${mins}`;
  }

  private formatNumbers(n: number): string {
    return (n < 10 ) ? '0'.concat(n.toString()) : n.toString();
  }

}
