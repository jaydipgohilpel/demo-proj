import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteDashboardComponent } from './complite-dashboard.component';

describe('CompliteDashboardComponent', () => {
  let component: CompliteDashboardComponent;
  let fixture: ComponentFixture<CompliteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompliteDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompliteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
