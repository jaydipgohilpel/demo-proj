import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chields',
  templateUrl: './chields.component.html',
  styleUrls: ['./chields.component.scss'],
  inputs: ['parentData'],
  outputs: ['childEvent'],
})
export class ChieldsComponent implements OnInit {
  parentData: any;

  childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  sendDataParent(data: string) {
    this.childEvent.emit(data);
  }
}
