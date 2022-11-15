import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationDetailsService } from '../services/registration-details.service';
@Component({
  selector: 'app-registration-in-reactive-form',
  templateUrl: './registration-in-reactive-form.component.html',
  styleUrls: ['./registration-in-reactive-form.component.scss'],
})
export class RegistrationInReactiveFormComponent implements OnInit {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]*$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]*$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(13),
      Validators.pattern('^[0-9]*$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8),
    ]),
    dateOfBirth: new FormControl('', Validators.required),
  });
  constructor(private registrationDetailsService: RegistrationDetailsService) {}

  matchPassword = false;
  isSubmitted = false;
  isUppercase = false;
  isLowercase = false;
  isSpecialCharacter = false;
  isNumber = false;
  ispasswordValid = false;

  ngOnInit(): void {
    this.matchPassword = false;
    this.isSubmitted = false;
    this.isUppercase = false;
    this.isLowercase = false;
    this.isSpecialCharacter = false;
    this.isNumber = false;
    this.ispasswordValid = false;
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

  get mobile() {
    return this.registrationForm.get('mobile');
  }
  get password() {
    this.passwordValidator();
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    this.passwordMatchingValidatior();
    return this.registrationForm.get('confirmPassword');
  }

  get dateOfBirth() {
    return this.registrationForm.get('dateOfBirth');
  }

  get registerFormControl() {
    return this.registrationForm.controls;
  }

  async submitRegistrationForm() {
    this.isSubmitted = true;
    this.passwordMatchingValidatior();
    if (
      this.registrationForm.valid &&
      this.matchPassword &&
      this.ispasswordValid
    ) {
      let payload = this.registrationForm.value;
      delete payload.confirmPassword;

      // api call
      this.registrationDetailsService
        .newRegistration(payload)
        .subscribe((res) => {
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
            this.registrationForm.reset();
          }
        });
    }
  }

  passwordMatchingValidatior() {
    if (
      this.registrationForm.controls.password.value ===
      this.registrationForm.controls.confirmPassword.value
    ) {
      this.matchPassword = true;
    } else {
      this.matchPassword = false;
    }
  }

  passwordValidator() {
    let x: any;
    x = this.registrationForm.controls.password.value;
    //lowercase
    /[a-z]+/g.test(x)
      ? ((this.isLowercase = true), (this.ispasswordValid = true))
      : ((this.isLowercase = false), (this.ispasswordValid = false));
    //uppercase
    /[A-Z]+/g.test(x)
      ? ((this.isUppercase = true), (this.ispasswordValid = true))
      : ((this.isUppercase = false), (this.ispasswordValid = false));
    //special char
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(x)
      ? ((this.isSpecialCharacter = true), (this.ispasswordValid = true))
      : ((this.isSpecialCharacter = false), (this.ispasswordValid = false));
    //number
    /[0-9]+/g.test(x)
      ? ((this.isNumber = true), (this.ispasswordValid = true))
      : ((this.isNumber = false), (this.ispasswordValid = false));
  }

  marktouch = (control: any) => control.markAsTouched({ onlySelf: true });

  ngAfterContentInit() {
    this.matchPassword = false;
    this.ispasswordValid = false;
  }
}
