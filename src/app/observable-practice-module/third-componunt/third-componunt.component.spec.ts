import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComponuntComponent } from './third-componunt.component';

describe('ThirdComponuntComponent', () => {
  let component: ThirdComponuntComponent;
  let fixture: ComponentFixture<ThirdComponuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdComponuntComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdComponuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
