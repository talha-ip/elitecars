import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
@Component({
  selector: 'app-google-map-integrations',
  templateUrl: './google-map-integrations.page.html',
  styleUrls: ['./google-map-integrations.page.scss'],
})
export class GoogleMapIntegrationsPage implements OnInit {

  map: any;
  marker: any;
  latitude: any = "";
  longitude: any = "";
  timestamp: any = "";
  constructor(private geolocation: Geolocation) {

  }

  ionViewDidEnter() {
    var mapOptions = {
      center: { lat: 23.2366, lng: 79.3822 },
      zoom: 7
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.GetLocation();
  }

  GetLocation() {
    var ref = this;
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position) => {
      var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      if (ref.marker == null) {
        ref.marker = new google.maps.Marker({
          position: gps,
          map: ref.map,
          title: 'my position'
        })
      }
      else {
        ref.marker.setPosition(gps);
      }
      ref.map.panTo(gps);
      ref.latitude = position.coords.latitude.toString();
      ref.longitude = position.coords.longitude.toString();
      ref.timestamp = (new Date(position.timestamp)).toString();
    })

  }

  ngOnInit() {
  }

}
