import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRegistrationAspBackendComponent } from './dashboard-registration-asp-backend.component';

describe('DashboardRegistrationAspBackendComponent', () => {
  let component: DashboardRegistrationAspBackendComponent;
  let fixture: ComponentFixture<DashboardRegistrationAspBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRegistrationAspBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRegistrationAspBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
