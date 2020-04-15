import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInterComponent } from './app-inter.component';

describe('AppInterComponent', () => {
  let component: AppInterComponent;
  let fixture: ComponentFixture<AppInterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
