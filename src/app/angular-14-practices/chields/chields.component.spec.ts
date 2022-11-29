import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldsComponent } from './chields.component';

describe('ChieldsComponent', () => {
  let component: ChieldsComponent;
  let fixture: ComponentFixture<ChieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
