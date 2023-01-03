import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ReagistrationAngular14Service } from '../../services/reagistration-angular-14.service';
import { RegistrationAngular14 } from './../../../interface/registration';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  isSubmitted = false;
  registrationForm: any;
  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  Address: string = '';
  City: string = '';
  State: string = '';
  data?: any[] = [];
  buttonText: string = 'Hide All Data';
  displayAllData = true;

  constructor(
    private formbuilder: FormBuilder,
    private registrationAngular14Service: ReagistrationAngular14Service
  ) {
    this.registrationForm = formbuilder.group({
      //First Method
      firstName: new FormControl('', [Validators.required]),
      //Second Method
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });
    this.getProductList();
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get address() {
    return this.registrationForm.get('address');
  }
  get city() {
    return this.registrationForm.get('city');
  }
  get state() {
    return this.registrationForm.get('state');
  }
  submiteRegistrationForm(form: NgForm) {
    this.isSubmitted = true;
    this.FirstName = this.registrationForm.value.firstName;
    this.LastName = this.registrationForm.value.lastName;
    this.Email = this.registrationForm.value.email;
    this.Address = this.registrationForm.value.address;
    this.City = this.registrationForm.value.city;
    this.State = this.registrationForm.value.state;

    if (this.registrationForm.valid) {
      // console.log('Succsess ', this.registrationForm.value);
      this.registrationAngular14Service
        .newRegistration(this.registrationForm.value)
        .subscribe((res) => {
          if (res) {
            this.registrationForm.reset();
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'success',
              title: 'Registration Successfully',
            });
            this.isSubmitted = false;
            this.getProductList();
          }
        });
    }
  }

  // this.registrationForm.reset({
  //   firstName:'Jaydip',
  //   lastName:'Gohil',
  //   });

  getProductList() {
    this.registrationAngular14Service
      .getAllRegistrationData()
      .subscribe((responce: RegistrationAngular14[]) => {
        this.data = responce;
      });
  }

  shaowHideData() {
    if (this.displayAllData) {
      this.displayAllData = false;
      this.buttonText = 'Show All Data';
    } else {
      this.displayAllData = true;
      this.buttonText = 'Hide All Data';
    }
  }

  setValueInForm() {
    // this.registrationForm.setvalue({
    //   'firstName': 'Jaydip',
    //   'lastName': 'Gohil',
    //   'email': 'sdad@scddj.com',
    //   'address': 'dsdsd',
    //   'city': 'sfdafda',
    //   'state': 'dsds',
    // });
  }
  patchValueInForm() {
    this.registrationForm.patchValue ({
      'firstName': 'Jaydip',
      'lastName': 'Gohil',
      'email': 'sdad@scddj.com',
      'address': 'dsdsd',
      'city': 'sfdafda',
      'state': 'dsds',
    });
  }
}
