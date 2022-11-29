import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
  preserveWhitespaces: true,
  // preserveWhitespaces:false default: false
})
export class MainComponentComponent implements OnInit {
  constructor() {}
  displyComponent: boolean = false;
  ngOnInit(): void {}
  // @HostListener('click', ['$event'])
  showOnClick(event: any) {
    alert('@HostListener works with click');
  }
  displydummyComponent() {
    this.displyComponent
      ? (this.displyComponent = false)
      : (this.displyComponent = true);
  }
}
