import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
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
