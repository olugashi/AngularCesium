import { Injectable } from '@angular/core';
import { EditablePolygon, AcLayerComponent, CoordinateConverter, PolygonEditOptions, Cartesian3 } from 'angular-cesium';

@Injectable({
  providedIn: 'root'
})
export class TestPolygonsManagerService {
  polygons: Map<string, EditablePolygon> = new Map<string, EditablePolygon>();

  createEditablePolygon(id: string, editPolygonsLayer: AcLayerComponent, editPointsLayer: AcLayerComponent,
                        editPolylinesLayer: AcLayerComponent, coordinateConverter: CoordinateConverter,
                        polygonOptions?: PolygonEditOptions, positions?: Cartesian3[]) {
    const editablePolygon = new EditablePolygon(
      id,
      editPolygonsLayer,
      editPointsLayer,
      editPolylinesLayer,
      coordinateConverter,
      polygonOptions,
      positions);
    this.polygons.set(id, editablePolygon
    );
  }

  dispose(id: string) {
    this.polygons.get(id).dispose();
    this.polygons.delete(id);
  }

  get(id: string): EditablePolygon {
    return this.polygons.get(id);
  }

  clear() {
    this.polygons.forEach(polygon => polygon.dispose());
    this.polygons.clear();
  }
}
