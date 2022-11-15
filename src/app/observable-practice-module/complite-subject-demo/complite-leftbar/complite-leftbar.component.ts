import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-complite-leftbar',
  templateUrl: './complite-leftbar.component.html',
  styleUrls: ['./complite-leftbar.component.scss'],
})
export class CompliteLeftbarComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: any[] = [];
  totalRecords: number = 0;

  ngOnInit(): void {
    this.getProductList();
    this.productsService.isdataUpdated$.subscribe(() => {
      this.getProductList();
    });
  }

  getProductList() {
    this.productsService.Product.subscribe((products: any[]) => {
      this.products = products;
      this.totalRecords = products.length;
    });
  }
}
