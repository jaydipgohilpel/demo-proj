import { ProductsService } from '../services/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  @Input() displayModal: boolean = false;
  @Output() closeCreatePopup = new EventEmitter<any>();
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  onSubmit(creatProductForm: NgForm) {
    if (creatProductForm.valid) {
      const payload = {
        title: creatProductForm.value.title,
        image: '../../assets/images/71li-ujtlUL._AC_UX679_.jpg',
        price: creatProductForm.value.price,
      };
      this.productsService.createProduct(payload).subscribe((res: any) => {
        if (res) {
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
        this.displayModal = !this.displayModal;
      });
    }
  }

  showModalDialog() {
    this.displayModal = true;
  }

  closeDialog(creatProductForm: any) {
    creatProductForm.onReset();
    this.closeCreatePopup.next(true);
  }
}
