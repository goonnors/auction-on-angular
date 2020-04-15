import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertyBindingComponent } from './output-property-binding.component';

describe('OutputPropertyBindingComponent', () => {
  let component: OutputPropertyBindingComponent;
  let fixture: ComponentFixture<OutputPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
