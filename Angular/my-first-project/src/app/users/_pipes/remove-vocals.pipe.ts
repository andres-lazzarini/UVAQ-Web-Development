import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeVocals',
})
export class RemoveVocalsPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    value = value.replace(/[a|e|i|o|u]/g, '');

    return value;
  }
}
