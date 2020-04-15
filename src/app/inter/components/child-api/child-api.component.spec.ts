import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildApiComponent } from './child-api.component';

describe('ChildApiComponent', () => {
  let component: ChildApiComponent;
  let fixture: ComponentFixture<ChildApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
