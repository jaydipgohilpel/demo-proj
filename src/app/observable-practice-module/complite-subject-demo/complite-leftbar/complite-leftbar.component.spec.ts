import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteLeftbarComponent } from './complite-leftbar.component';

describe('CompliteLeftbarComponent', () => {
  let component: CompliteLeftbarComponent;
  let fixture: ComponentFixture<CompliteLeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompliteLeftbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompliteLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
