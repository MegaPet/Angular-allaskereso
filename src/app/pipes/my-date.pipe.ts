import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDatePipe'
})
export class MyDatePipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = new Date(value);
    return date.toLocaleDateString('hu-HU'); // Example: Hungarian locale
  }
}