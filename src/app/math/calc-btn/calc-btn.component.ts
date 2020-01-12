import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalcButton } from '../calc/calc.component';

@Component({
  selector: 'app-calc-btn',
  templateUrl: './calc-btn.component.html',
  styleUrls: ['./calc-btn.component.scss']
})
export class CalcBtnComponent implements OnInit {

  @Input()
  calcBtn:CalcButton;

  @Output() 
  calcBtnClick = new EventEmitter<CalcButton>();

  constructor() { }

  ngOnInit() {
  }

  btnClick(calcBtn: CalcButton) {
    console.log('In Clild=',calcBtn);
    this.calcBtnClick.emit(calcBtn);
  }
}
