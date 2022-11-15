import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInReactiveFormComponent } from './registration-in-reactive-form.component';

describe('RegistrationInReactiveFormComponent', () => {
  let component: RegistrationInReactiveFormComponent;
  let fixture: ComponentFixture<RegistrationInReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationInReactiveFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationInReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
