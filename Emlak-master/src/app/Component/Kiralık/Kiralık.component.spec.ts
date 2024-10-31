/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KiralıkComponent } from './Kiralık.component';

describe('KiralıkComponent', () => {
  let component: KiralıkComponent;
  let fixture: ComponentFixture<KiralıkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiralıkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiralıkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
