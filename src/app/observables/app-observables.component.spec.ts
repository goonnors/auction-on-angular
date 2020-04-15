import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppObservablesComponent } from './app-observables.component';

describe('AppObservablesComponent', () => {
  let component: AppObservablesComponent;
  let fixture: ComponentFixture<AppObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
