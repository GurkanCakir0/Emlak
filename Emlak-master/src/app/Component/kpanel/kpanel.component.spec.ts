/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KpanelComponent } from './kpanel.component';

describe('KpanelComponent', () => {
  let component: KpanelComponent;
  let fixture: ComponentFixture<KpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
