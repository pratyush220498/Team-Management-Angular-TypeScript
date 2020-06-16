import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianteamComponent } from './indianteam.component';

describe('IndianteamComponent', () => {
  let component: IndianteamComponent;
  let fixture: ComponentFixture<IndianteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
