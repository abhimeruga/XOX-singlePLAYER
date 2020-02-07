import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoxLocalComponent } from './xox-local.component';

describe('XoxLocalComponent', () => {
  let component: XoxLocalComponent;
  let fixture: ComponentFixture<XoxLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoxLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoxLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
