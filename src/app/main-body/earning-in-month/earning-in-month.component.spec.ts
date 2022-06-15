import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningInMonthComponent } from './earning-in-month.component';

describe('EarningInMonthComponent', () => {
  let component: EarningInMonthComponent;
  let fixture: ComponentFixture<EarningInMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningInMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningInMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
