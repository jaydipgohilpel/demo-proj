import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAndOtherPractisesComponent } from './rxjs-and-other-practises.component';

describe('RxjsAndOtherPractisesComponent', () => {
  let component: RxjsAndOtherPractisesComponent;
  let fixture: ComponentFixture<RxjsAndOtherPractisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsAndOtherPractisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsAndOtherPractisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
