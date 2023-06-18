import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumnetverificationComponent } from './documnetverification.component';

describe('DocumnetverificationComponent', () => {
  let component: DocumnetverificationComponent;
  let fixture: ComponentFixture<DocumnetverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumnetverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumnetverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
