import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfiledComponent } from './userfiled.component';

describe('UserfiledComponent', () => {
  let component: UserfiledComponent;
  let fixture: ComponentFixture<UserfiledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfiledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
