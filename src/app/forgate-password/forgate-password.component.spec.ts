import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgatePasswordComponent } from './forgate-password.component';

describe('ForgatePasswordComponent', () => {
  let component: ForgatePasswordComponent;
  let fixture: ComponentFixture<ForgatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
