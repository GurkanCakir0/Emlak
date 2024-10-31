/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrundetayıduzenleComponent } from './Urundetayıduzenle.component';

describe('UrundetayıduzenleComponent', () => {
  let component: UrundetayıduzenleComponent;
  let fixture: ComponentFixture<UrundetayıduzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrundetayıduzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrundetayıduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
