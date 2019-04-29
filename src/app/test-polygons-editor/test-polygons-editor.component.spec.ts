import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPolygonsEditorComponent } from './test-polygons-editor.component';

describe('TestPolygonsEditorComponent', () => {
  let component: TestPolygonsEditorComponent;
  let fixture: ComponentFixture<TestPolygonsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPolygonsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPolygonsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
