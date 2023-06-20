import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFormComponent } from './selector-form.component';

describe('SelectorFormComponent', () => {
  let component: SelectorFormComponent;
  let fixture: ComponentFixture<SelectorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorFormComponent]
    });
    fixture = TestBed.createComponent(SelectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
