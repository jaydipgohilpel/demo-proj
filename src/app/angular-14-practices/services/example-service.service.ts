import { Injectable } from '@angular/core';

// @Injectable()
@Injectable({
  providedIn: 'root',
})
export class ExampleServiceService {
  list: number[] = [100];
  constructor() {}
  getSimpleMessage() {
    return 'hello this message from the example service';
  }
  addNumber(number: number) {
    this.list.push(number);
  }
  getList() {
    return this.list;
  }
}
