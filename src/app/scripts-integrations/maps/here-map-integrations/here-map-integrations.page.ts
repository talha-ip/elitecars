import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var H;


@Component({
  selector: 'app-here-map-integrations',
  templateUrl: './here-map-integrations.page.html',
  styleUrls: ['./here-map-integrations.page.scss'],
})
export class HereMapIntegrationsPage implements OnInit {

  map: any;
  marker: any;
  latitude: any = "";
  longitude: any = "";
  timestamp: any = "";

  constructor(private geolocation: Geolocation) {
    setTimeout(() => {
      // Initialize the platform object:
      var platform = new H.service.Platform({
        'apikey': 'COYSyQ1h-ASoz8kSmjeWRuQ_cbWLYU95-Vc46IvloH4'
      });

      // Obtain the default map types from the platform object
      var maptypes = platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
          zoom: 7,
          center: { lat: 23.2366, lng: 79.3822 }
        });

      // add a resize listener to make sure that the map occupies the whole container
      window.addEventListener('resize', () => map.getViewPort().resize());

      //Step 3: make the map interactive
      // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    }, 1000);
    this.GetLocation();

  }

  GetLocation() {
    var ref = this;
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position) => {
      var gps = new H.maps.LatLng(position.coords.latitude, position.coords.longitude);
      if (ref.marker == null) {
        ref.marker = new H.maps.Marker({
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

      console.log("lat");
      console.log(ref.latitude);

      console.log("long");
      console.log(ref.longitude);

      this.moveMapToBerlin(ref.latitude, ref.longitude)
    })


  }

  moveMapToBerlin(xlat, xlong) {

    H.map.setCenter({ lat: xlat, lng: xlong });
    H.map.setZoom(14);
  }

  ngOnInit() {
  }

}
