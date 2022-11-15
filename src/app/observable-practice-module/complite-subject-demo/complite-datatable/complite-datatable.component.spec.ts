import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteDatatableComponent } from './complite-datatable.component';

describe('CompliteDatatableComponent', () => {
  let component: CompliteDatatableComponent;
  let fixture: ComponentFixture<CompliteDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompliteDatatableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompliteDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
