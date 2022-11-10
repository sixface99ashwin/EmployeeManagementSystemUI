import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/Login';
import { LoginDetails } from 'src/app/models/LoginDetails';
import { Registration } from 'src/app/models/Registration';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl:string = environment.baseApiUrl;
  token:any;

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  register(addRegisterRequest:Registration):Observable<any>{
    return this.http.post(this.baseApiUrl + 'api/User/Registration',addRegisterRequest,{responseType:'text'});
    //return this.http.post('https://localhost:44308/api/User/Registration', addRegisterRequest,);
  }

  login(addLoginRequest:Login):Observable<LoginDetails>{
    return this.http.post<LoginDetails>(this.baseApiUrl+'api/User/Login',addLoginRequest);
     //return this.http.post<LoginDetails>('https://localhost:44308/api/User/Login', addLoginRequest);
  }
}
