import { PolygonLayerComponent } from './polygon-layer/polygon-layer.component';
import { CesiumMapComponent } from './cesium-map/cesium-map.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';
import { PolygonsEditorLayerComponent } from './polygons-editor-layer/polygons-editor-layer.component';
import { MapToolbarComponent } from './map-toolbar/map-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CesiumMapComponent,
    PolygonLayerComponent,
    PolygonsEditorLayerComponent,
    MapToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
