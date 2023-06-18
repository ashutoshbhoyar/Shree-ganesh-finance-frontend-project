import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmountofloanComponent } from './ammountofloan.component';

describe('AmmountofloanComponent', () => {
  let component: AmmountofloanComponent;
  let fixture: ComponentFixture<AmmountofloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmountofloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmountofloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
