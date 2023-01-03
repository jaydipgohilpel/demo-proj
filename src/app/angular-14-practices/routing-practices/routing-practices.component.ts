import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-practices',
  templateUrl: './routing-practices.component.html',
  styleUrls: ['../../../app/shared/common-style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingPracticesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
