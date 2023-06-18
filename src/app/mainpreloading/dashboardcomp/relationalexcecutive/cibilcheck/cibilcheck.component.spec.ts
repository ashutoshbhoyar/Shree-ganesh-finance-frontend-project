import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilcheckComponent } from './cibilcheck.component';

describe('CibilcheckComponent', () => {
  let component: CibilcheckComponent;
  let fixture: ComponentFixture<CibilcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CibilcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
