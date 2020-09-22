import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-maps-integration',
  templateUrl: './maps-integration.page.html',
  styleUrls: ['./maps-integration.page.scss'],
})
export class MapsIntegrationPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  googleMap() {
    this.nav.navigateForward('google-map-integrations');
  }

  hereMap() {
    this.nav.navigateForward('here-map-integrations');
  }
}
