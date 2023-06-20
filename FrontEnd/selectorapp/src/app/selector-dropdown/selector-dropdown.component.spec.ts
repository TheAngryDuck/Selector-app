import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDropdownComponent } from './selector-dropdown.component';

describe('SelectorDropdownComponent', () => {
  let component: SelectorDropdownComponent;
  let fixture: ComponentFixture<SelectorDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorDropdownComponent]
    });
    fixture = TestBed.createComponent(SelectorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
