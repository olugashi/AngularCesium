import { TestBed } from '@angular/core/testing';

import { TestPolygonsEditorService } from './test-polygons-editor.service';

describe('TestPolygonsEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestPolygonsEditorService = TestBed.get(TestPolygonsEditorService);
    expect(service).toBeTruthy();
  });
});
