import { Product } from './../interface/product';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
})
export class ViewProductsComponent implements OnInit, AfterViewInit {
  constructor(private productsService: ProductsService) {}
  @ViewChild('dataTable') dataTable: Table | undefined;

  totalRecords: number = 0;
  loading: boolean = false;
  products: Product[] = [];
  productsList: Product[] = [];
  createModal: boolean = false;
  updateModal: boolean = false;
  loadEvent: any;
  productsId: number = 0;
  cols: any;

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    let error = this.productsService
      .getAllProducts()
      .subscribe((products: Product[]) => {
        this.productsList = products;
        this.totalRecords = products.length;
      });
    if (error.closed) {
      this.loading = false;
    }
  }

  ngAfterViewInit(): void {
    this.loading = false;
  }

  displayCreateModal() {
    this.createModal = true;
  }

  updateProduct(productsId: number) {
    this.productsId = productsId;
    this.updateModal = true;
  }

  closeCreatePopup() {
    this.showLazyLoadPage();
    this.createModal = !this.createModal;
  }

  closeUpdatePopup() {
    this.showLazyLoadPage();
    this.updateModal = !this.updateModal;
  }

  showLazyLoadPage() {
    this.loading = true;
    this.getProductList();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  deleteProduct(productsId: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't Delete this Product !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteProduct(productsId).subscribe(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: 'success',
            title: 'Your Product has been deleted',
          });
          this.showLazyLoadPage();
        });
      }
    });
  }

  customSort(event: any) {
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }

  applyFilterGlobal(event: any, stringVal: any) {
    this.dataTable?.filterGlobal(
      (event.target as HTMLInputElement).value,
      stringVal
    );
  }
}
