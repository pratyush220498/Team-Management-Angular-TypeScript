import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersFeaturesComponent } from './players-features.component';

describe('PlayersFeaturesComponent', () => {
  let component: PlayersFeaturesComponent;
  let fixture: ComponentFixture<PlayersFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
