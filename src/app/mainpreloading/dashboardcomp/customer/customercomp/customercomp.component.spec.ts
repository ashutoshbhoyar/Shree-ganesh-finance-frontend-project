import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercompComponent } from './customercomp.component';

describe('CustomercompComponent', () => {
  let component: CustomercompComponent;
  let fixture: ComponentFixture<CustomercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
