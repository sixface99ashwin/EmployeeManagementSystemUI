import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkingHour } from 'src/app/models/WorkingHour';
import { WorkingHourService } from 'src/app/services/workingHour/working-hour.service';

@Component({
  selector: 'app-add-working-hour',
  templateUrl: './add-working-hour.component.html',
  styleUrls: ['./add-working-hour.component.css']
})
export class AddWorkingHourComponent implements OnInit {
  workingHourDetails:WorkingHour={
    id:0,
    month: '',
    companyWorkingHour: 0,
    employeeWorkingHour: 0,
    empId: '',
  }
  constructor(private route:ActivatedRoute, private workingHourService:WorkingHourService,private router:Router) { }

  ngOnInit(): void {
  }
  addWorkingHour(){
    this.workingHourService.addWorkingDetails(this.workingHourDetails).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['workingHour/list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });

  }

}
