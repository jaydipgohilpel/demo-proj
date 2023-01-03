export interface Registration {
  confirmPassword?: string;
  dateOfBirth: Date;
  email: string;
  firstName: string;
  id?: number;
  lastName: string;
  mobile: string;
  password: string;
}

export interface RegistrationAngular14 {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  id?: number;
}
