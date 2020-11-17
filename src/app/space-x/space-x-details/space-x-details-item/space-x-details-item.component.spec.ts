import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXDetailsItemComponent } from './space-x-details-item.component';

describe('SpaceXDetailsItemComponent', () => {
  let component: SpaceXDetailsItemComponent;
  let fixture: ComponentFixture<SpaceXDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
