import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-rxjs-and-other-practises',
  templateUrl: './rxjs-and-other-practises.component.html',
  styleUrls: ['./rxjs-and-other-practises.component.scss'],
})
export class RxjsAndOtherPractisesComponent implements OnInit, OnDestroy {
  number: number = 0;
  intervalCounter: number = 0;
  intervalSubscription: any;
  apiSubscription: any;
  subscription: any;
  dummyData: any;

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.subscribe();
  }
  subscribe() {
    this.subscription = timer(0, 1000).subscribe((no: number) => {
      this.number = no;
      console.log('subscriber', no);
    });

    this.intervalSubscription = setInterval(() => {
      this.intervalCounter++;
      console.log('intervalCounter', this.intervalCounter);
      // this.unSubscribe();
    }, 3000);
    this.apiSubscription = this.ProductsService.getDummyDataForRxjs().subscribe(
      (res) => {
        this.dummyData = res.data;
      }
    );
  }

  unSubscribe() {
    clearInterval(this.intervalSubscription);
    this.subscription.unsubscribe();
    this.apiSubscription.unsubscribe();
    this.intervalCounter = 0;
  }

  ngOnDestroy(): void {
    this.unSubscribe();
  }
}
