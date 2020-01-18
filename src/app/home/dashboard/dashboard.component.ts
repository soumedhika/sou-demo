import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { UserModal } from '../modals/user.modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jsonResp:UserModal[] = [];

  constructor(
    private _service: HomeService
  ) { 
  }

  ngOnInit() {

    const data = this._service.getUserData().subscribe(
      (data:any) => {
        console.log('Data=',data);
        this.jsonResp = data;
      },
      (error) => {
        console.error('Error',error);
      },
      () => {
        console.log('Completed');
      }
      
    );
    console.log(data);
  }

}
