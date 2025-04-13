import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'myDatePipe',
  standalone: true, // or add Injectable if used in constructor injection
})
@Injectable({
  providedIn: 'root', // <-- this makes it injectable!
})
export class MyDatePipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = new Date(value);
    return date.toLocaleDateString('hu-HU');
  }
}
