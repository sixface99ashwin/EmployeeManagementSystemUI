import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentRule } from 'src/app/models/PaymentRule';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentRuleService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  getAllPaymentRules():Observable<PaymentRule[]>{
    return this.http.get<PaymentRule[]>(this.baseApiUrl + 'api/PaymentRule/GetAllRules');

  }
  addPaymentRule(addPaymentRuleRequest:PaymentRule):Observable<PaymentRule>{
    return this.http.post<PaymentRule>(this.baseApiUrl +'api/PaymentRule/AddPaymentRule',addPaymentRuleRequest);
  }

  getPaymentRuleById(id:number):Observable<PaymentRule>{
    return this.http.get<PaymentRule>(this.baseApiUrl + 'api/PaymentRule/GetPaymentRuleById/'+id);
  }

  updatePaymentRule(id:number, updatePaymentRuleRequest:PaymentRule):Observable<PaymentRule>{
   return this.http.put<PaymentRule>(this.baseApiUrl + 'api/PaymentRule/UpdatePaymentRule/'+ id,updatePaymentRuleRequest);
  }
  deletePaymentRule(id:number):Observable<PaymentRule>{
    return this.http.delete<PaymentRule>(this.baseApiUrl + 'api/PaymentRule/DeletepaymentRule/' + name);

  }
}


