import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereMapIntegrationsPage } from './here-map-integrations.page';

describe('HereMapIntegrationsPage', () => {
  let component: HereMapIntegrationsPage;
  let fixture: ComponentFixture<HereMapIntegrationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereMapIntegrationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereMapIntegrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
