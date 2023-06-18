import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayemicompComponent } from './payemicomp.component';

describe('PayemicompComponent', () => {
  let component: PayemicompComponent;
  let fixture: ComponentFixture<PayemicompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayemicompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayemicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
