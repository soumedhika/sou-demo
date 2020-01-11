import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selected = 'option2';
  food = 'Pongadalu';

  constructor() { }

  ngOnInit() {
  }

  primaryClick() {
    console.log('food=',this.food);
  }

}
