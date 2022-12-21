import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../services/example-service.service';

@Component({
  selector: 'app-services-practices',
  templateUrl: './services-practices.component.html',
  styleUrls: ['./services-practices.component.scss'],
  // providers:[ExampleServiceService]
})
export class ServicesPracticesComponent implements OnInit {
  constructor(private _exampleServiceService: ExampleServiceService) {}
  msg = '';
  ngOnInit(): void {
    this.msg = this._exampleServiceService.getSimpleMessage();
  }
}
