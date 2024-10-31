/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YpalComponent } from './ypal.component';

describe('YpalComponent', () => {
  let component: YpalComponent;
  let fixture: ComponentFixture<YpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
