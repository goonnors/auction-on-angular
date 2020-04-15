import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsharedComponent } from './subjectshared.component';

describe('SubjectsharedComponent', () => {
  let component: SubjectsharedComponent;
  let fixture: ComponentFixture<SubjectsharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
