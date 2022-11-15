import { ProductsService } from '../services/products.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
})
export class UpdateProductComponent implements OnInit {
  @Input() updateModal: boolean = false;
  @Input() productsId: number = 0;
  @Output() closeUpdatePopup = new EventEmitter<any>();

  title = '';
  price = '';
  image = '../../assets/images/71HblAHs5xL._AC_UY879_-2.jpg';
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.productsId !== 0) {
      this.productsService
        .getSingleProduct(this.productsId)
        .subscribe((res: any) => {
          this.title = res.title;
          this.price = res.price;
        });
    }
  }

  onSubmit(UpdateProductForm: NgForm) {
    if (UpdateProductForm.valid) {
      const payload = {
        title: UpdateProductForm.value.title,
        price: UpdateProductForm.value.price,
        image: this.image,
      };

      this.productsService
        .updateProduct(this.productsId, payload)
        .subscribe((res: any) => {
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
              title: 'Product Updated successfully',
            });
            UpdateProductForm.onReset();
          }
          this.updateModal = !this.updateModal;
        });
    }
  }

  showModalDialog() {
    this.updateModal = true;
  }

  closeDialog(UpdateProductForm: any) {
    UpdateProductForm.onReset();
    this.closeUpdatePopup.next(true);
  }
}
