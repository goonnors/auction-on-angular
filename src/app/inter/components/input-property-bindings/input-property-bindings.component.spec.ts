import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyBindingsComponent } from './input-property-bindings.component';

describe('InterPropertyBindingsWrapperComponent', () => {
  let component: InputPropertyBindingsComponent;
  let fixture: ComponentFixture<InputPropertyBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropertyBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertyBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
