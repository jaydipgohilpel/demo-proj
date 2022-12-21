import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
  file: any;
  // On file Select
  onChange(event: any, item: any) {
   this.file=event.target.files[0];
  }
  onSubmit(creatProductForm: NgForm) {

    if (creatProductForm.valid) {
      const payload = {
        files: this.file,
        name:"jaydip"
      };
      this.productsService
        .uploadFiletoAspcore(payload)
        .subscribe((res: any) => {
          let Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          if (res.ok) {
            debugger
            Toast.fire({
              icon: 'success',
              title: res.message              ,
            });
          }
          else{
            Toast.fire({
              icon:'error' ,
              title: res.message,
            });
          }
          creatProductForm.onReset();
        });
    }
  }
}
