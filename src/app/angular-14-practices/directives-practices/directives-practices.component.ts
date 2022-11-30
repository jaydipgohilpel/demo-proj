import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practices',
  templateUrl: './directives-practices.component.html',
  styleUrls: ['./directives-practices.component.scss','../../../app/shared/common-style.css'],
})
export class DirectivesPracticesComponent implements OnInit {
  nameOption = '';
  studentName: any[] = [
    { name: 'ajit kumar' },
    { name: 'ronak kumar' },
    { name: 'rohan kumar' },
    { name: 'sagar kumar' },
    { name: 'rahul kumar' },
    { name: 'mahesh kumar' },
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
      people: [{ name: 'dsd' }, { name: 'sds' }, { name: 'sdsd' }],
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

  people: any[] = [
    { country: 'China', name: 'ajit kumar' },
    { country: 'UK', name: 'rahul kumar' },
    { country: 'USE', name: 'mahesh kumar' },
    { country: 'India', name: 'Jaydip kumar' },
    { country: 'China', name: 'abx kumar' },
    { country: 'UK', name: 'dada kumar' },
    { country: 'USE', name: 'adafa kumar' },
    { country: 'India', name: 'fafaf kumar' },
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
      { id: 1, name: 'ajit kumar', gender: 'Male', age: 24, course: 'Mca' },
      { id: 2, name: 'ronak kumar', gender: 'Male', age: 24, course: 'Bca' },
      { id: 3, name: 'rohan kumar', gender: 'Male', age: 24, course: 'Mca' },
      { id: 4, name: 'sagar kumar', gender: 'Male', age: 24, course: 'Bca' },
      { id: 5, name: 'rahul kumar', gender: 'Male', age: 24, course: 'Mca' },
      { id: 6, name: 'mahesh kumar', gender: 'Male', age: 24, course: 'Bca' },
      { id: 7, name: 'pravin kumar', gender: 'Male', age: 30, course: 'B.com' },
      { id: 8, name: 'vinod kumar', gender: 'Male', age: 40, course: 'Mba' },
    ];
  }

  tackByStudentId(index: number, student: any) {
    return student.id;
  }

  getcolor(country: any) {
    switch (country) {
      case 'China':
        return 'green';
      case 'India':
        return 'blue';
      case 'UK':
        return 'lightgreen';
      case 'USE':
        return 'red';
    }
    return;
  }

  getCssClass(flag: string) {
    let cssClass;
    if (flag == 'mode') {
      cssClass = {
        'font-30': true,
        'green': true,
        'bold': true,
        'line-height-2':true
      };
    } else {
      cssClass = {
        'font-25': true,
        'blue': true,
        'italic': true,
        'line-height-1':true
      };
    }
    return cssClass;
  }
}
