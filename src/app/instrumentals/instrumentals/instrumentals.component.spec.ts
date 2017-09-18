import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentalsComponent } from './instrumentals.component';

describe('InstrumentalsComponent', () => {
  let component: InstrumentalsComponent;
  let fixture: ComponentFixture<InstrumentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
