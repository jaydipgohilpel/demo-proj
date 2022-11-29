import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPracticesComponent } from './directives-practices.component';

describe('DirectivesPracticesComponent', () => {
  let component: DirectivesPracticesComponent;
  let fixture: ComponentFixture<DirectivesPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesPracticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
