import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-complite-footer',
  templateUrl: './complite-footer.component.html',
})
export class CompliteFooterComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  totalRecords: number = 0;

  ngOnInit(): void {
    this.getProductList();
    this.productsService.isdataUpdated$.subscribe(() => {
      this.getProductList();
    });
  }

  getProductList() {
    this.productsService.Product.subscribe((products: any[]) => {
      this.totalRecords = products.length;
    });
  }
}
