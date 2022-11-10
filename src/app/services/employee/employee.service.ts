import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  getAllEmployees():Observable<Employee[]>{
    //return this.http.get<Employee[]>(this.baseApiUrl + 'api/Employee');
    return this.http.get<Employee[]>('https://localhost:44390/api/Employee/GetAllEmployees');

  }
  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    return this.http.post<Employee>('https://localhost:44390/api/Employee/AddEmployee',addEmployeeRequest);
  }

  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + 'api/Employee/GetEmployeeById/'+id);
  }
  getEmployeeByName(name:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + 'api/Employee/GetEmployeeByName/'+name);
  }
  updateEmployee(id:string, updateEmployeeRequest:Employee):Observable<Employee>{
   return this.http.put<Employee>(this.baseApiUrl + 'api/Employee/UpdateEmployee/'+ id,updateEmployeeRequest);
  }
  deleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + 'api/Employee/DeleteEmployee/' + id);

  }
}
