import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkingHour } from 'src/app/models/WorkingHour';
import { WorkingHourService } from 'src/app/services/workingHour/working-hour.service';

@Component({
  selector: 'app-edit-working-hour',
  templateUrl: './edit-working-hour.component.html',
  styleUrls: ['./edit-working-hour.component.css']
})
export class EditWorkingHourComponent implements OnInit {

  workingHourDetails:WorkingHour={
    id:0,
    month: '',
    companyWorkingHour: 0,
    employeeWorkingHour: 0,
    empId: '',
  }
  id:number;
  constructor(private route:ActivatedRoute, private workingHourService:WorkingHourService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=> {
         this.id =Number(params.get('id'));
        if(this.id){
          this.workingHourService.getById(this.id).subscribe({
            next: (response) =>{
                this.workingHourDetails=response;
                console.log(this.workingHourDetails);
            }
          });

        }
      }
    })
  }
  updateWorkingHour(){
    this.workingHourService.updateWorkingDetails(this.workingHourDetails.id,this.workingHourDetails).subscribe({
      next: (response) =>{
        this.router.navigate(['workinghour/list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }


}

