import { Component, OnInit } from '@angular/core';
import { Requestleave } from 'src/app/models/RequestLeave';
import { RequestLeaveService } from 'src/app/services/requestLeave/request-leave.service';

@Component({
  selector: 'app-request-leave-list',
  templateUrl: './request-leave-list.component.html',
  styleUrls: ['./request-leave-list.component.css']
})
export class RequestLeaveListComponent implements OnInit {

  requestLeave:Requestleave[]=[];
  filterTerm!:string;
  constructor(private requestLeaveService:RequestLeaveService) { }

  ngOnInit(): void {
    this.requestLeaveService.getAllRequestleaves()
    .subscribe({
      next: (request) => {
        this.requestLeave=request;
        console.log(this.requestLeave);
      },
      error : (response) => {
        console.log(response);
      }
    });


  }

  deleteRequestLeave(Id:number){
    this.requestLeaveService.deleteRequestleave(Id)
    .subscribe({
      next: (res) => {
        console.log(res);
        alert("RequestLeave details deleted");
      },
      error : (response) => {
        console.log(response);
      }
    });
  }

}
