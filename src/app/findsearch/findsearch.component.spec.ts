import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsearchComponent } from './findsearch.component';

describe('FindsearchComponent', () => {
  let component: FindsearchComponent;
  let fixture: ComponentFixture<FindsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
