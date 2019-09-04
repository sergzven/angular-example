import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreStateComponent } from './store-state.component';

describe('StoreStateComponent', () => {
  let component: StoreStateComponent;
  let fixture: ComponentFixture<StoreStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
