import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRule } from 'src/app/models/PaymentRule';
import { PaymentRuleService } from 'src/app/services/paymentRule/payment-rule.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {
  policyDetails:PaymentRule={
    ruleId:0,
    policy:'',
    policyDetails:'',
  }

  constructor(private route:ActivatedRoute, private paymentRuleService:PaymentRuleService,private router:Router) { }

  ngOnInit(): void {
  }
  addPaymentRule(){
    this.paymentRuleService.addPaymentRule(this.policyDetails).subscribe({
      next: (product)=>{
        console.log(product);
        this.router.navigate(['policy-list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });

}
}
