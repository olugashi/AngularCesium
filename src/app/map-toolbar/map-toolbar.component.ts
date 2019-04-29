import { Component, OnInit, ViewChild } from '@angular/core';
import { HippodromeEditorService,
  EllipsesEditorService,
  ZoomToRectangleService,
  CesiumService,
  CirclesEditorService,
  CameraService,
  PolylinesEditorService,
  PolylineEditorObservable,
  RangeAndBearingComponent
} from 'angular-cesium';
import { TestPolygonsEditorService } from '../Services/test-polygons-editor.service';

@Component({
  selector: 'app-map-toolbar',
  templateUrl: './map-toolbar.component.html',
  styleUrls: ['./map-toolbar.component.css'],
  providers: [ZoomToRectangleService,
    CirclesEditorService,
    EllipsesEditorService,
    TestPolygonsEditorService,
    HippodromeEditorService,
    PolylinesEditorService],
})
export class MapToolbarComponent implements OnInit {

  rnb: PolylineEditorObservable;
  @ViewChild('rangeAndBearing') private rangeAndBearing: RangeAndBearingComponent;

  constructor(
    private cameraService: CameraService,
    private zoomToRectangleService: ZoomToRectangleService,
    private cesiumService: CesiumService,
    private circlesEditor: CirclesEditorService,
    private ellipsesEditor: EllipsesEditorService,
    private polygonsEditor: TestPolygonsEditorService,
    private hippodromesEditor: HippodromeEditorService,
    private polylinesEditor: PolylinesEditorService,
  ) {
    this.zoomToRectangleService.init(cesiumService, cameraService);
  }

  ngOnInit() {
  }

  goHome() {
    this.cameraService.cameraFlyTo({destination: Cesium.Cartesian3.fromDegrees(35.21, 31.77, 200000)});
  }

  createRangeAndBearing() {
    if (this.rnb) {
      this.rnb.dispose();
    }

    this.rnb = this.rangeAndBearing.create();
  }

  zoomToRectangle() {
    this.zoomToRectangleService.activate();
  }
  drawCircle() {
    this.circlesEditor.create();
  }

  drawEllipse() {
    this.ellipsesEditor.create();
  }

  drawPolygon() {
    this.polygonsEditor.create();
  }

  drawPolyline() {
    this.polylinesEditor.create();
  }

  drawHippodrome() {
    this.hippodromesEditor.create();
  }
}

