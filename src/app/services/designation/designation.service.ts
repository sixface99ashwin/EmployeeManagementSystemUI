import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from 'src/app/models/Designation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  getAllDesignations():Observable<Designation[]>{
    return this.http.get<Designation[]>(this.baseApiUrl + 'api/Designation/GetAllDesignationData');

  }
  addDesignation(addDesignationRequest:Designation):Observable<Designation>{
    return this.http.post<Designation>('https://localhost:44390/api/Designation/AddDesignationDetails',addDesignationRequest);
  }

  getDesignationByName(name:string):Observable<Designation>{
    return this.http.get<Designation>(this.baseApiUrl + 'api/Designation/GetDesignationByName/'+name);
  }

  updateDesignation(name:string, updateDesignationRequest:Designation):Observable<Designation>{
   return this.http.put<Designation>(this.baseApiUrl + 'api/Designation/UpdateDesignationDetails/'+ name,updateDesignationRequest);
  }
  deleteDesignation(name:string):Observable<Designation>{
    return this.http.delete<Designation>(this.baseApiUrl + 'api/Designation/DeleteDesignation/' + name);

  }
}

