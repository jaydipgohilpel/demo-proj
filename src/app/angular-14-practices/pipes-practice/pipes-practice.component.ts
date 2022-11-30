import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-practice',
  templateUrl: './pipes-practice.component.html',
  styleUrls: [
    './pipes-practice.component.scss',
    '../../../app/shared/common-style.css',
  ],
})
export class PipesPracticeComponent implements OnInit {
  constructor() {}

  employees = [
    {
      code: 'emp001',
      name: 'SDSD',
      salary: 45000,
      dob: '06/aug/2022',
    },
    {
      code: 'emp002',
      name: 'dfdSDDSDdf',
      salary: 55000,
      dob: '05/aug/2022',
    },
    {
      code: 'emp003',
      name: 'dfsSDDdf',
      salary: 45000,
      dob: '4/aug/2022',
    },
    {
      code: 'emp004',
      name: 'dfSDFdf',
      salary: 54000,
      dob: '02/aug/2022',
    },
    {
      code: 'emp005',
      name: 'FSDDFSF',
      salary: 44000,
      dob: '7/aug/2022',
    },
  ];
  border: number = 5;
  height: number = 200;
  width: number = 400;
  dob = new Date(1886, 8 - 1, 2);
  salary: number = 100000000;
  name: string = 'Jaydip Gohil';
  position: string = 'software developer';
  work: string = 'Software development';
  currentDate = new Date();
  myNumber: number = 0.125555553456789;
  persons: any = [
    { code: '001', name: 'sdgsgssd', gender: 'male', salary: 45360000 },
    { code: '002', name: 'sdsgsgsd', gender: 'female', salary: 6450000 },
    { code: '003', name: 'sgsdssgsd', gender: 'male', salary: 4536000 },
    { code: '004', name: 'dssgd', gender: 'female', salary: 25000 },
    { code: '005', name: 'fagsgsfa', gender: 'male', salary: 3530000 },
    { code: '006', name: 'gsrggs', gender: 'female', salary: 55000 },
  ];
  ngOnInit(): void {}
}
