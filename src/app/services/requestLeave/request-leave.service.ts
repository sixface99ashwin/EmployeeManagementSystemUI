import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestleave } from 'src/app/models/RequestLeave';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestLeaveService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  getAllRequestleaves():Observable<Requestleave[]>{
    return this.http.get<Requestleave[]>(this.baseApiUrl + 'api/RequestLeave/GetAllRequestLeave');
    //return this.http.get<Requestleave[]>(' https://localhost:44390/api/RequestLeave/GetAllRequestLeave');

  }
  addRequestleave(addRequestleaveRequest:Requestleave):Observable<Requestleave>{
    return this.http.post<Requestleave>(this.baseApiUrl +'/api/RequestLeave/AddRequestLeave',addRequestleaveRequest);
      //return this.http.post<Requestleave>(' https://localhost:44390/api/RequestLeave/AddRequestLeave',addRequestleaveRequest);

  }

  getRequestleaveById(id:number):Observable<Requestleave>{
    return this.http.get<Requestleave>(this.baseApiUrl + 'api/RequestLeave/GetRequestLeaveById/'+id);
  }

  updateRequestleave(id:number, updateRequestleaveRequest:Requestleave):Observable<Requestleave>{
   return this.http.put<Requestleave>(this.baseApiUrl + 'api/RequestLeave/UpdateRequestleave/'+ id,updateRequestleaveRequest);
  }
  deleteRequestleave(id:number):Observable<Requestleave>{
    return this.http.delete<Requestleave>(this.baseApiUrl + 'api/RequestLeave/DeleteRequestLeave/' + id);

  }
}



