import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: [],
  preserveWhitespaces: true,
})
export class ParentsComponent implements OnInit {
  constructor() {}
  childData: any;
  new: any;
  ngOnInit(): void {}

  getChildData(data: any) {
    this.childData = data;
  }
}
