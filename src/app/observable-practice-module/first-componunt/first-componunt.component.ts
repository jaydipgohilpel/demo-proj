import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../services/subject.service';

@Component({
  selector: 'app-first-componunt',
  templateUrl: './first-componunt.component.html',
})
export class FirstComponuntComponent implements OnInit {
  constructor(private SubjectService: SubjectService) {}
  exclusive: boolean = false;
  accessDataFromServices: string = '';

  ngOnInit(): void {
    this.SubjectService.exclusiveAsSubject$.subscribe((res) => {
      this.exclusive = res;
    });
    this.SubjectService.shareDataAcrosAllComponuntsubject$.subscribe((res) => {
      this.accessDataFromServices = res;
    });
  }
  shareData(input: string) {
    this.SubjectService.shareDataEmitComponunt(input);
  }
}
