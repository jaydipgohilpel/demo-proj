import { NgForm } from '@angular/forms';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-complite-form-compo',
  templateUrl: './complite-form-compo.component.html',
  styleUrls: ['./complite-form-compo.component.scss'],
})
export class CompliteFormCompoComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
  onSubmit(creatProductForm: NgForm) {
    if (creatProductForm.valid) {
      const payload = {
        title: creatProductForm.value.title,
        image: '../../assets/images/71li-ujtlUL._AC_UX679_.jpg',
        price: creatProductForm.value.price,
      };
      this.productsService
        .createProductNewOne(payload)
        .subscribe((res: any) => {
          if (res) {
            this.productsService.productDataUpdated();
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'success',
              title: 'Product Added successfully',
            });
            creatProductForm.onReset();
          }
        });
    }
  }
}
