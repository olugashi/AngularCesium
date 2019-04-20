import { MapLayerProviderOptions, ViewerConfiguration } from 'angular-cesium';

import { Component, OnInit } from '@angular/core';
import { SceneMode } from 'angular-cesium';

@Component({
  selector: 'app-cesium-map',
  templateUrl: './cesium-map.component.html',
  styleUrls: ['./cesium-map.component.css'],
  providers: [ViewerConfiguration],
})
export class CesiumMapComponent implements OnInit {

  arcGisMapServerProvider = MapLayerProviderOptions.ArcGisMapServer;
  sceneMode = SceneMode.SCENE3D;

  constructor(private viewerConf: ViewerConfiguration) {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
    };

    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYjEzOTc3Yi1mZGQ3LTQ2M2ItYWRhNy05YjQ4OWFjNDgzYjQiLCJpZCI6NDYyOCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MTI2NjUzNX0.IElSGP-gOEmsWxZRsWGM6z29yUD3xPQJvlaqEB98TkQ';
    viewerConf.viewerModifier = (viewer: any) => {
      viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    };

    //this.appSettingsService.showTracksLayer = true;
  }

  ngOnInit() {
  }
}

