import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invalidInput'
})
export class InvalidInputPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? value : 'Invalid input.';
  }

}
