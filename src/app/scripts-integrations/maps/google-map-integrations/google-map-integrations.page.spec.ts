import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapIntegrationsPage } from './google-map-integrations.page';

describe('GoogleMapIntegrationsPage', () => {
  let component: GoogleMapIntegrationsPage;
  let fixture: ComponentFixture<GoogleMapIntegrationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapIntegrationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapIntegrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
