/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatılıkComponent } from './Satılık.component';

describe('SatılıkComponent', () => {
  let component: SatılıkComponent;
  let fixture: ComponentFixture<SatılıkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatılıkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatılıkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
