import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterSideComponent } from './outer-side.component';

describe('OuterSideComponent', () => {
  let component: OuterSideComponent;
  let fixture: ComponentFixture<OuterSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
