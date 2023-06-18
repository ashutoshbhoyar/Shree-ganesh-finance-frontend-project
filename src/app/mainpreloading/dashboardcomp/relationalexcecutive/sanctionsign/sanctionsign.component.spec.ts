import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionsignComponent } from './sanctionsign.component';

describe('SanctionsignComponent', () => {
  let component: SanctionsignComponent;
  let fixture: ComponentFixture<SanctionsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionsignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
