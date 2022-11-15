import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-complite-datatable',
  templateUrl: './complite-datatable.component.html',
  styleUrls: ['./complite-datatable.component.scss'],
})
export class CompliteDatatableComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  totalRecords: number = 0;
  products: any[] = [];

  ngOnInit(): void {
    this.getProductList();
    this.productsService.isdataUpdated$.subscribe(() => {
      this.getProductList();
    });
  }

  getProductList() {
    this.productsService.getAllProductNewOne().subscribe((products: any[]) => {
      this.productsService.getAllProductSubject(products);
      this.products = products;
    });
  }
}
