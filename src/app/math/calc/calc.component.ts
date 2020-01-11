import { Component, OnInit } from '@angular/core';

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
}
