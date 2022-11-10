import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/models/Designation';
import { DesignationService } from 'src/app/services/designation/designation.service';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent implements OnInit {
 designations:Designation[]=[];
 filterTerm!:string;
  constructor(private designationService:DesignationService) { }

  ngOnInit(): void {

    this.designationService.getAllDesignations()
    .subscribe({
      next: (res) => {
        this.designations=res;
        console.log(res);
      },
      error : (response) => {
        console.log(response);
      }
    });


  }



  deleteDesignation(designationName:string){
    this.designationService.deleteDesignation(designationName)
    .subscribe({
      next: (res) => {
        console.log(res);
        alert("Designation details deleted");
      },
      error : (response) => {
        console.log(response);
      }
    });
  }



}
