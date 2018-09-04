import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisTurnComponent } from './this-turn.component';

describe('ThisTurnComponent', () => {
  let component: ThisTurnComponent;
  let fixture: ComponentFixture<ThisTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
