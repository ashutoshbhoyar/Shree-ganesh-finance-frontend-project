import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendsanctionmailComponent } from './sendsanctionmail.component';

describe('SendsanctionmailComponent', () => {
  let component: SendsanctionmailComponent;
  let fixture: ComponentFixture<SendsanctionmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendsanctionmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendsanctionmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
