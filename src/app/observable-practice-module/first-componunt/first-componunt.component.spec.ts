import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponuntComponent } from './first-componunt.component';

describe('FirstComponuntComponent', () => {
  let component: FirstComponuntComponent;
  let fixture: ComponentFixture<FirstComponuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponuntComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstComponuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
