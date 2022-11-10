import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentRule } from 'src/app/models/PaymentRule';
import { PaymentRuleService } from 'src/app/services/paymentRule/payment-rule.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policies:PaymentRule[]=[];
  filterTerm!:string;
  constructor(private paymentRuleService:PaymentRuleService) { }

  ngOnInit(): void {
    this.paymentRuleService.getAllPaymentRules()
    .subscribe({
      next: (res) => {
        this.policies=res;
        console.log(this.policies);
      },
      error : (response) => {
        console.log(response);
      }
    });


  }

  deletePaymentRule(id:number){
    this.paymentRuleService.deletePaymentRule(id)
    .subscribe({
      next: (res) => {
        console.log(res);
        alert("PaymentRule details deleted");
      },
      error : (response) => {
        console.log(response);
      }
    });
  }

}
