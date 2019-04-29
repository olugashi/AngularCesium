import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionLayerComponent } from './selection-layer.component';

describe('SelectionLayerComponent', () => {
  let component: SelectionLayerComponent;
  let fixture: ComponentFixture<SelectionLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
