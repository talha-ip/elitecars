import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingOnePage } from './setting-one.page';

describe('SettingOnePage', () => {
  let component: SettingOnePage;
  let fixture: ComponentFixture<SettingOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
