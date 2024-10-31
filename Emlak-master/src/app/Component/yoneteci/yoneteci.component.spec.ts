/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoneteciComponent } from './yoneteci.component';

describe('YoneteciComponent', () => {
  let component: YoneteciComponent;
  let fixture: ComponentFixture<YoneteciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoneteciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneteciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
