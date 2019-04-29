import { TestBed } from '@angular/core/testing';

import { TestPolygonsManagerService } from './test-polygons-manager.service';

describe('TestPolygonsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestPolygonsManagerService = TestBed.get(TestPolygonsManagerService);
    expect(service).toBeTruthy();
  });
});
