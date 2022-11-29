import { Component, OnInit } from '@angular/core';
import { EmployeeDummy } from 'src/app/employee-dummy';

@Component({
  selector: '[app-dummy]',
  // templateUrl: './dummy.component.html',
  template: `<h2><p>dummy works! without templete and without css</p></h2>
    <h1>without templete and without css work</h1>
    <h3>dummy.component.scss css work</h3>
    <h4>dummy.component-2.scss css work</h4>
    <h5><b>dummy.component-3.scss css work</b></h5> `,
  styleUrls: [
    './dummy.component.scss',
    './dummy.component-2.scss',
    './dummy.component-3.scss',
  ],
  styles: [
    `
      p {
        color: red;
        background-color: yellow;
      }
      h1 {
        color: blue;
        background-color: yellow;
      }
    `,
  ],
  viewProviders: [EmployeeDummy],
})
export class DummyComponent implements OnInit {
  constructor(private _obj: EmployeeDummy) {}

  ngOnInit(): void {}
}
