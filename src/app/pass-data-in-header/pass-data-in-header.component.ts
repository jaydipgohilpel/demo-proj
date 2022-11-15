import { PassDataInHeaderService } from '../services/pass-data-in-header.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pass-data-in-header',
  templateUrl: './pass-data-in-header.component.html',
  styleUrls: ['./pass-data-in-header.component.scss'],
})
export class PassDataInHeaderComponent implements OnInit {
  constructor(private passDataInHeaderService: PassDataInHeaderService) {}
  jewelery: [] = [];
  ngOnInit(): void {
    this.passDataInHeaderService.getProductList().subscribe((responce: any) => {
      this.jewelery = responce;
    });
  }
}
