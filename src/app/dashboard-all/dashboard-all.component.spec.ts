import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllComponent } from './dashboard-all.component';

describe('DashboardAllComponent', () => {
  let component: DashboardAllComponent;
  let fixture: ComponentFixture<DashboardAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
