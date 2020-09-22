import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmobIntegrationsPage } from './admob-integrations.page';

describe('AdmobIntegrationsPage', () => {
  let component: AdmobIntegrationsPage;
  let fixture: ComponentFixture<AdmobIntegrationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmobIntegrationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmobIntegrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
