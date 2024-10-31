/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrundetayComponent } from './urundetay.component';

describe('UrundetayComponent', () => {
  let component: UrundetayComponent;
  let fixture: ComponentFixture<UrundetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrundetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrundetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
