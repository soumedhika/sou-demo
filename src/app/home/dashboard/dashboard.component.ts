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
  postsJson:any[] =[];

  constructor(
    private _service: HomeService
  ) { 
  }

  ngOnInit() {

    this._service.getUsers().subscribe(
      (data:any) => this.jsonResp = data ,
      (error) => console.error('Error',error)
    );

    this._service.getPosts().subscribe(
      (data:any) => this.postsJson = data ,
      (error) => console.error('Error',error)
    );

  }

}
