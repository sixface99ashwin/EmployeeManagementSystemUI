import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkingHour } from 'src/app/models/WorkingHour';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkingHourService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  getAllWorkingDetails():Observable<WorkingHour[]>{
    //return this.http.get<WorkingHour[]>(this.baseApiUrl + 'api/WorkingHour/GetAllWorkingDetails');
    return this.http.get<WorkingHour[]>(' https://localhost:44390/api/WorkingHour/GetAllWorkingDetails');

  }
  addWorkingDetails(addworkingHour:WorkingHour):Observable<WorkingHour>{
    return this.http.post<WorkingHour>(this.baseApiUrl +'api/WorkingHour/AddWorkingDetails',addworkingHour);
      //return this.http.post<Requestleave>(' https://localhost:44390/api/RequestLeave/AddRequestLeave',addRequestleaveRequest);

  }

  getById(id:number):Observable<WorkingHour>{
    return this.http.get<WorkingHour>(this.baseApiUrl + 'api/WorkingHour/GetById/'+id);
  }

  updateWorkingDetails(id:number, updateWorkingHour:WorkingHour):Observable<WorkingHour>{
   return this.http.put<WorkingHour>(this.baseApiUrl + 'api/WorkingHour/UpdateWorkingDetails/'+ id,updateWorkingHour);
  }
  deleteWorkingDetails(id:number):Observable<WorkingHour>{
    return this.http.delete<WorkingHour>(this.baseApiUrl + 'api/WorkingHour/DeleteWorkingDetails/' + id);

  }
}



