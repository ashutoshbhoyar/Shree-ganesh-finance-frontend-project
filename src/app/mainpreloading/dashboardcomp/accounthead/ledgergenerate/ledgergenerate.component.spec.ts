import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgergenerateComponent } from './ledgergenerate.component';

describe('LedgergenerateComponent', () => {
  let component: LedgergenerateComponent;
  let fixture: ComponentFixture<LedgergenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgergenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgergenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
