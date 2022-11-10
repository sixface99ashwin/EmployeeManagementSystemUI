import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestleave } from 'src/app/models/RequestLeave';
import { RequestLeaveService } from 'src/app/services/requestLeave/request-leave.service';

@Component({
  selector: 'app-edit-request-leave',
  templateUrl: './edit-request-leave.component.html',
  styleUrls: ['./edit-request-leave.component.css']
})
export class EditRequestLeaveComponent implements OnInit {
  id:number;
  requestLeave:Requestleave={
    requestId: 0,
    leaveType: '',
    fromDate: null,
    toDate: null,
    empId: '',
  }
  constructor(private route:ActivatedRoute, private requestleaveService:RequestLeaveService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=> {
         this.id =Number(params.get('id'));
        if(this.id){
          this.requestleaveService.getRequestleaveById(this.id).subscribe({
            next: (response) =>{
                this.requestLeave=response;
                console.log(this.requestLeave);
            }
          });

        }
      }
    })
  }
  updateRequestLeave(){
    this.requestleaveService.updateRequestleave(this.requestLeave.requestId,this.requestLeave).subscribe({
      next: (response) =>{
        this.router.navigate(['requestleave/list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }


}
