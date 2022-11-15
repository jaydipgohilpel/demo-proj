import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
})
export class LeftSidebarComponent implements OnInit {
  subCount: number = 0;
  accessDataFromServices: string = '';
  constructor(private subjectService: SubjectService) {}
  count: string = '';
  checked: boolean = false;
  ngOnInit(): void {
    this.saveData('s');
    this.subjectService.shareDataAcrosAllComponuntsubject$.subscribe((res) => {
      this.accessDataFromServices = res;
    });
  }

  saveData(value: string) {
    this.subjectService.customObservable
      .pipe(
        map((data: any) => {
          return 'count is ' + data;
        })
      )
      .subscribe(
        (cnt: any) => {
          this.count = cnt;
        },
        (error) => {
          this.count = `{${this.count}}:` + error;
          console.log(error);
        },
        () => {
          this.count = `{${this.count}}:` + 'complete';
        }
      );
  }
  subjectHide() {
    this.subjectService.subjectHide();
  }
  subjectShow() {
    this.subjectService.subjectShow();
  }

  incrementCounter() {
    this.subjectService.incrementCounter(++this.subCount);
  }
  decrementCounter() {
    this.subjectService.decrementCounter(--this.subCount);
  }

  shareData(input: string) {
    this.subjectService.shareDataEmitComponunt(input);
  }
}
