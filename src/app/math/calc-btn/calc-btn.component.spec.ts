import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBtnComponent } from './calc-btn.component';

describe('CalcBtnComponent', () => {
  let component: CalcBtnComponent;
  let fixture: ComponentFixture<CalcBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
