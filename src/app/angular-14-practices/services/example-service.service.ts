import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {

  constructor() {
  }
  getSimpleMessage()
  {
    return "hello this message from the example service";
  }
}
