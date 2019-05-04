import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftPage } from './soft.page';

describe('SoftPage', () => {
  let component: SoftPage;
  let fixture: ComponentFixture<SoftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
