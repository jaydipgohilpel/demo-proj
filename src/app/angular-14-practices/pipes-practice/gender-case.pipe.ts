import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderCase',
})
export class GenderCasePipe implements PipeTransform {
  transform(gender: string): string {
    return gender.toUpperCase();
  }
}
