import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteFormCompoComponent } from './complite-form-compo.component';

describe('CompliteFormCompoComponent', () => {
  let component: CompliteFormCompoComponent;
  let fixture: ComponentFixture<CompliteFormCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompliteFormCompoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompliteFormCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
