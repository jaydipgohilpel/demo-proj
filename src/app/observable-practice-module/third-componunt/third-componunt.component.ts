import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-third-componunt',
  templateUrl: './third-componunt.component.html',
})
export class ThirdComponuntComponent implements OnInit {
  shareDataAcrosAllComponunt: string = '';
  constructor(private SubjectService: SubjectService) {}

  ngOnInit(): void {
    this.SubjectService.behaviorSubjectGlobal$.subscribe((res) => {
      this.shareDataAcrosAllComponunt = res;
    });
  }
}
