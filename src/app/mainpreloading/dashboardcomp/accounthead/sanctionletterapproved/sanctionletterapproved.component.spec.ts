import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionletterapprovedComponent } from './sanctionletterapproved.component';

describe('SanctionletterapprovedComponent', () => {
  let component: SanctionletterapprovedComponent;
  let fixture: ComponentFixture<SanctionletterapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionletterapprovedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionletterapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
