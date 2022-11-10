import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/Designation';
import { DesignationService } from 'src/app/services/designation/designation.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {
  designationDetails:Designation={
    designationName:'',
    roleName:'',
    departmentName:'',
  }
  FirstName: string;
  constructor(private route:ActivatedRoute, private designationService:DesignationService,private router:Router) { }

  ngOnInit(): void {
  }


  addDesignation(){
    this.designationService.addDesignation(this.designationDetails).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['designation-list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });

  }

}
