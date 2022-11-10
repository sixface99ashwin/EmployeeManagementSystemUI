import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails:Employee ={
    empId: '',
    firstname: '',
    lastName: '',
    email: '',
    address: '',
    imageUrl: '',
    gender: '',
    phoneNumber: 0,
    salary: 0,
      designationName: '',
      designations: {
        designationName:'',
        roleName: '',
        departmentName:'',
    }
  }
  empId:string;


  constructor(private activateRoute:ActivatedRoute,private route:ActivatedRoute, private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=> {
         this.empId =params.get('id');
        if(this.empId){
          this.employeeService.getEmployee(this.empId).subscribe({
            next: (response) =>{
                this.employeeDetails=response;
            }
          });

        }
      }
    })
  }
   id = this.activateRoute.snapshot.params['id'];
  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.empId,this.employeeDetails).subscribe({
      next: (response) =>{
        this.router.navigate(['employee-list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

}
