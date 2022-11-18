import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @HostListener('click', ['$event'])
  showOnClick(event: any) {
    alert('@HostListener');
  }
}
