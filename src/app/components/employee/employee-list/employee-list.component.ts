import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[] = [];
  filterTerm!:string;

  constructor(private route:ActivatedRoute, private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees=employees;
        console.log(employees);
      },
      error : (response) => {
        console.log(response);
      }
    });

  }
  deleteEmployee(empId:string){
    this.employeeService.deleteEmployee(empId)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['employee-list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
  }



