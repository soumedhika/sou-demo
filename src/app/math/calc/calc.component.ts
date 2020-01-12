import { Component, OnInit } from '@angular/core';

export interface CalcButton {
  text: string,
  val?: number,
  opp?: string
}

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  n1: number = 0;
  n2: number = 0;
  opr: string = 'add';
  result: number = 0;

  calcAnswer: string = '0';

  buttons: CalcButton[] = [
    { text: '7', val: 7 },
    { text: '8', val: 8 },
    { text: '9', val: 9 },
    { text: '/', opp: 'D' },
    { text: '4', val: 4 },
    { text: '5', val: 5 },
    { text: '6', val: 6 },
    { text: '*', opp: 'M' },
    { text: '1', val: 1 },
    { text: '2', val: 2 },
    { text: '3', val: 3 },
    { text: '-', opp: 'S' },
    { text: '.', opp: 'P' },
    { text: '0', val: 0 },
    { text: '=', opp: 'E' },
    { text: '+', opp: 'A' },
    { text: 'AC', opp: 'AC' }
  ];

  calcOpr: string;

  constructor() { }

  ngOnInit() {
  }

  primaryClick() {
    let o = this.opr;

    this.result = o == 'add' ? this.n1 + this.n2 :
      o == 'sub' ? this.n1 - this.n2 :
        o == 'mul' ? this.n1 * this.n2 :
          this.n1 / this.n2;
  }


  onCalcBtnClick($event: CalcButton) {

    console.log('In Parent=', $event);

    switch ($event.text) {
      case '=':

        this.n1 = parseFloat(this.calcAnswer.substring(0,this.calcAnswer.indexOf(this.calcOpr)));
        this.n2 = parseFloat(this.calcAnswer.substring(this.calcAnswer.indexOf(this.calcOpr)+1));

        this.calcAnswer =  
        (this.calcOpr=='+') ? ''+(this.n1 + this.n2) : 
        (this.calcOpr=='-') ? ''+(this.n1 - this.n2) : 
        (this.calcOpr=='*') ? ''+(this.n1 * this.n2) : 
        (this.calcOpr=='/') ? ''+(this.n1 / this.n2) : '0';
        
        this.calcOpr=null;
        break;

      case 'AC':
        this.calcAnswer = '0';
        this.calcOpr=null;
        break;

      case '+':
      case '-':
      case '*':
      case '/':
        if(!this.calcOpr) {
          this.calcOpr = $event.text;
          this.calcAnswer += $event.text;
        }
        break;

      default:
        if (this.calcAnswer != '0')
          this.calcAnswer += $event.text;
        else this.calcAnswer = $event.text;

        break;
    }


  }
}
