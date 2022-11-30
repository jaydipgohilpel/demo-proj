import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-practices',
  templateUrl: './data-binding-practices.component.html',
  styleUrls: [
    './data-binding-practices.component.scss',
    '../../../app/shared/common-style.css',
  ],
})
export class DataBindingPracticesComponent implements OnInit {
  title: string = 'propurty binding using title';
  constructor() {}
  cols: number = 3;
  border: number = 5;
  height: number = 200;
  width: number = 400;

  inputData: string | any = 'Jaydip Gohil';
  data: string | any = 'Jaydip Gohil';
  ngOnInit(): void {}
}
