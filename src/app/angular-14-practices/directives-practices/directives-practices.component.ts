import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practices',
  templateUrl: './directives-practices.component.html',
  styleUrls: ['./directives-practices.component.scss'],
})
export class DirectivesPracticesComponent implements OnInit {
  nameOption = '';
  studentName: any[] = [
    {
      name: 'ajit kumar',
    },
    {
      name: 'ronak kumar',
    },
    {
      name: 'rohan kumar',
    },
    {
      name: 'sagar kumar',
    },
    {
      name: 'rahul kumar',
    },
    {
      name: 'mahesh kumar',
    },
  ];

  ngOnInit(): void {}
  isValid: boolean = true;
  changeToggale(value: any) {
    this.isValid = value;
  }

  studentDb: any[] = [];
  countryDetails: any[] = [
    {
      country: 'India',
      people: [
        { name: 'ajit kumar' },
        { name: 'rahul kumar' },
        { name: 'mahesh kumar' },
      ],
    },
    {
      country: 'UK',
      people: [{ name: 'abc' }, { name: 'def' }, { name: 'ghi' }],
    },
    {
      country: 'USE',
      people: [{ name: 'jkl' }, { name: 'mno' }, { name: 'pqr' }],
    },
  ];
  constructor() {
    this.studentDb = [
      {
        id: 1,
        name: 'ajit kumar',
        gender: 'Male',
        age: 24,
        course: 'Mca',
      },
      {
        id: 2,
        name: 'ronak kumar',
        gender: 'Male',
        age: 24,
        course: 'Bca',
      },
      {
        id: 3,
        name: 'rohan kumar',
        gender: 'Male',
        age: 24,
        course: 'Mca',
      },
      {
        id: 4,
        name: 'sagar kumar',
        gender: 'Male',
        age: 24,
        course: 'Bca',
      },
      {
        id: 5,
        name: 'rahul kumar',
        gender: 'Male',
        age: 24,
        course: 'Mca',
      },
      {
        id: 6,
        name: 'mahesh kumar',
        gender: 'Male',
        age: 24,
        course: 'Bca',
      },
    ];
  }
  nameChange(selectedData: any) {
    this.nameOption = selectedData;
  }

  getMoreStudentData() {
    this.studentDb = [
      {
        id: 1,
        name: 'ajit kumar',
        gender: 'Male',
        age: 24,
        course: 'Mca',
      },
      {
        id: 2,
        name: 'ronak kumar',
        gender: 'Male',
        age: 24,
        course: 'Bca',
      },
      {
        id: 3,
        name: 'rohan kumar',
        gender: 'Male',
        age: 24,
        course: 'Mca',
      },
      {
        id: 4,
        name: 'sagar kumar',
        gender: 'Male',
        age: 24,
        course: 'Bca',
      },
      {
        id: 5,
        name: 'rahul kumar',
        gender: 'Male',
        age: 24,
        course: 'Mca',
      },
      {
        id: 6,
        name: 'mahesh kumar',
        gender: 'Male',
        age: 24,
        course: 'Bca',
      },
      {
        id: 7,
        name: 'pravin kumar',
        gender: 'Male',
        age: 30,
        course: 'B.com',
      },
      {
        id: 8,
        name: 'vinod kumar',
        gender: 'Male',
        age: 40,
        course: 'Mba',
      },
    ];
  }

  tackByStudentId(index: number, student: any) {
    return student.id;
  }
}
