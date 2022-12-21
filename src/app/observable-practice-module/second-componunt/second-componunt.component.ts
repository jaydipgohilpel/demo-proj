import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../services/subject.service';

@Component({
  selector: 'app-second-componunt',
  templateUrl: './second-componunt.component.html',
})
export class SecondComponuntComponent implements OnInit {
  shareDataAcrosAllComponunt: string = '';
  constructor(private SubjectService: SubjectService) {}
  subjectCount = 0;
  ngOnInit(): void {
    this.SubjectService.counterAsSubjectObservel$.subscribe((res) => {
      this.subjectCount = res;
    });
    this.SubjectService.shareDataAcrosAllComponuntsubject$.subscribe((res) => {
      this.shareDataAcrosAllComponunt = res;
    });
  }
}
