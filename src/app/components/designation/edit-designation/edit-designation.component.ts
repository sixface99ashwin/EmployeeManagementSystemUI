import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/Designation';
import { DesignationService } from 'src/app/services/designation/designation.service';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {
  designationName:string;
  designationDetails:Designation={
    designationName:'',
    roleName:'',
    departmentName:'',
  }
  constructor(private route:ActivatedRoute, private designationService:DesignationService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=> {
         this.designationName =params.get('id');
        if(this.designationName){
          this.designationService.getDesignationByName(this.designationName).subscribe({
            next: (response) =>{
                this.designationDetails=response;
                console.log(this.designationDetails);
            }
          });

        }
      }
    })
  }
  updateDesignation(){
    this.designationService.updateDesignation(this.designationDetails.designationName,this.designationDetails).subscribe({
      next: (response) =>{
        this.router.navigate(['designation-list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }


}
