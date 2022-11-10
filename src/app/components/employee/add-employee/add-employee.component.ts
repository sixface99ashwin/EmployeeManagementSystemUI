import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
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


  constructor(private route:ActivatedRoute, private employeeService:EmployeeService,private router:Router) { }


  ngOnInit(): void {
    console.log(this.employeeDetails);
  }
  addEmployee(){
    this.employeeService.addEmployee(this.employeeDetails).subscribe({
      next: (res)=>{
        // console.log(this.employeeDetails);
        console.log(res);
        this.router.navigate(['employee-list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });

}
}
