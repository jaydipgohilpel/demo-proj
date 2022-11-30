import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empCodeFormator',
})
export class EmpCodeFormatorPipe implements PipeTransform {
  transform(value: number): string {
    return 'EMP' + value;
  }
}
