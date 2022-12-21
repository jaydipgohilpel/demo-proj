import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  private subjectSource = new Subject<string>();
  subject$ = this.subjectSource.asObservable();

  private countSubject = new Subject<number | undefined>();
  countS$ = this.countSubject.asObservable();

  private behaviorSubject = new BehaviorSubject(
    'behavior Subject initial value'
  );
  behaviorSubjectGlobal$ = this.behaviorSubject.asObservable();

  cnt = 1;
  url =
    'https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json';

  private exclusive = new Subject<boolean>();
  exclusiveAsSubject$ = this.exclusive.asObservable();

  private subjectCounter = new Subject<number>();
  counterAsSubjectObservel$ = this.subjectCounter.asObservable();

  private shareDataAcrosAllComponunt = new Subject<string>();
  shareDataAcrosAllComponuntsubject$ =
    this.shareDataAcrosAllComponunt.asObservable();

  subCount: number = 0;

  customObservable = new Observable((observer) => {
    setInterval(() => {
      observer.next(this.cnt++);
      if (this.cnt > 10) {
        observer.error('greater than 10 error');
      }
      if (this.cnt >= 5) {
        observer.complete();
      }
    }, 1000);
  });

  marketData(): Observable<any> {
    return this.http.get<any>(
      'https://api.coingecko.com/api/v3/exchange_rates'
    );
  }

  shareDataEmitComponunt(data: string): void {
    this.behaviorSubject.next(data);
    this.shareDataAcrosAllComponunt.next(data);
  }

  subjectShow() {
    this.exclusive.next(true);
  }
  subjectHide() {
    this.exclusive.next(false);
  }

  incrementCounter(counter: number) {
    this.subjectCounter.next(counter);
  }
  decrementCounter(counter: number) {
    this.subjectCounter.next(counter);
  }
}
