/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IlanverComponent } from './ilanver.component';

describe('IlanverComponent', () => {
  let component: IlanverComponent;
  let fixture: ComponentFixture<IlanverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlanverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
