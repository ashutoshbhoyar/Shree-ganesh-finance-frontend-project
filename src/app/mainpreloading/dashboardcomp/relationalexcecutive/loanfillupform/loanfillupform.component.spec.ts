import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanfillupformComponent } from './loanfillupform.component';

describe('LoanfillupformComponent', () => {
  let component: LoanfillupformComponent;
  let fixture: ComponentFixture<LoanfillupformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanfillupformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanfillupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
