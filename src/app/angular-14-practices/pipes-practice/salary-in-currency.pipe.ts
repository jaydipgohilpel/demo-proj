import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryInCurrency',
})
export class SalaryInCurrencyPipe implements PipeTransform {
  transform(salary: number): string {
    return 'Rs. ' + salary;
  }
}
