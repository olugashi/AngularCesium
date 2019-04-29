import { Component, OnInit, ViewChild } from '@angular/core';

import { from as observableFrom, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { SelectionManagerService,
  AcLayerComponent,
  AcNotification,
  Cartesian3,
  ActionType,
  CesiumEvent,
  CesiumEventModifier,
  AcEntity
} from 'angular-cesium';

class MyEntity extends AcEntity {
  selected = false;
  image = 'assets/fighter-jet.png';

  constructor(public position: Cartesian3,
              public id: string) {
    super();
  }
}

@Component({
  selector: 'app-selection-layer',
  templateUrl: './selection-layer.component.html',
  styleUrls: ['./selection-layer.component.css'],
  providers: [SelectionManagerService]
})
export class SelectionLayerComponent implements OnInit {

  @ViewChild(AcLayerComponent) layer: AcLayerComponent;

  selectionImage = '/assets/selected.png';
  entities$: Observable<AcNotification>;
  Cesium = Cesium;
  show = true;

  constructor(private selectionManager: SelectionManagerService, private snakBar: MatSnackBar) {
    const entities = [
      new MyEntity(Cesium.Cartesian3.fromDegrees(34.0, 32.0), '1'),
      new MyEntity(Cesium.Cartesian3.fromDegrees(32.0, 34.0), '2')
    ];
    const entitiesNotifications = entities.map((entity, index) => ({
      id: entity.id,
      actionType: ActionType.ADD_UPDATE,
      entity
    }));
    this.entities$ = observableFrom(entitiesNotifications);
  }

  ngOnInit() {
    this.selectionManager.initSelection({
      event: CesiumEvent.LEFT_CLICK,
     // modifier: CesiumEventModifier.ALT
    });

    this.selectionManager.selectedEntity$().subscribe(selectedEntity => {
      const myEntity = selectedEntity as MyEntity;
      this.layer.update(myEntity, myEntity.id);

      console.log('all selected entities:', this.selectionManager.selectedEntities());
    });
    this.snakBar.open('Click + ALT to selected the plane', 'ok');
  }

  setShow($event: boolean) {
    this.show = $event;
  }

}

