import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpyt'
})
export class DashIfEmpytPipe implements PipeTransform {

  transform(value: any): string | any{
    const IS_EMPTY = value === '' || value === null || value === undefined;
    if (IS_EMPTY) {
      return '-';
    }
    return value;
  }

}
