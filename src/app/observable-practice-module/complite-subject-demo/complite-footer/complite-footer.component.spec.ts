import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteFooterComponent } from './complite-footer.component';

describe('CompliteFooterComponent', () => {
  let component: CompliteFooterComponent;
  let fixture: ComponentFixture<CompliteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompliteFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompliteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
