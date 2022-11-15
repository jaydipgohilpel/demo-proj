import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponuntComponent } from './second-componunt.component';

describe('SecondComponuntComponent', () => {
  let component: SecondComponuntComponent;
  let fixture: ComponentFixture<SecondComponuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondComponuntComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondComponuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
