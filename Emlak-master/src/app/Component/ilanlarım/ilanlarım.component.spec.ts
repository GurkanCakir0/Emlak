/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IlanlarımComponent } from './ilanlarım.component';

describe('IlanlarımComponent', () => {
  let component: IlanlarımComponent;
  let fixture: ComponentFixture<IlanlarımComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlanlarımComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanlarımComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
