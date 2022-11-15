import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataInHeaderComponent } from './pass-data-in-header.component';

describe('PassDataInHeaderComponent', () => {
  let component: PassDataInHeaderComponent;
  let fixture: ComponentFixture<PassDataInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassDataInHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassDataInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
