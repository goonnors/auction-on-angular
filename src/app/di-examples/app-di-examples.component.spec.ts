import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiExamplesComponent } from './app-di-examples.component';

describe('AppDiExamplesComponent', () => {
  let component: AppDiExamplesComponent;
  let fixture: ComponentFixture<AppDiExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDiExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDiExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
