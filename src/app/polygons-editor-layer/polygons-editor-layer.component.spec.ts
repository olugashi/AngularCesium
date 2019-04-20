import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonsEditorLayerComponent } from './polygons-editor-layer.component';

describe('PolygonsEditorLayerComponent', () => {
  let component: PolygonsEditorLayerComponent;
  let fixture: ComponentFixture<PolygonsEditorLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonsEditorLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonsEditorLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
