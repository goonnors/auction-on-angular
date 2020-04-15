import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQouterComponent } from './price-qouter.component';

describe('PriceQouterComponent', () => {
  let component: PriceQouterComponent;
  let fixture: ComponentFixture<PriceQouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceQouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceQouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
