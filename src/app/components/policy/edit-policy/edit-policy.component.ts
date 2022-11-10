import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentRule } from 'src/app/models/PaymentRule';
import { DesignationService } from 'src/app/services/designation/designation.service';
import { PaymentRuleService } from 'src/app/services/paymentRule/payment-rule.service';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {

  ruleId:number;
  policyDetails:PaymentRule={
    ruleId:0,
    policy:'',
    policyDetails:'',
  }
  constructor(private route:ActivatedRoute, private paymentRuleService:PaymentRuleService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=> {
         this.ruleId =Number(params.get('id'));
        if(this.ruleId){
          this.paymentRuleService.getPaymentRuleById(this.ruleId).subscribe({
            next: (response) =>{
                this.policyDetails=response;
                console.log(this.policyDetails);
            }
          });

        }
      }
    })
  }
  updatePaymentRule(){
    this.paymentRuleService.updatePaymentRule(this.policyDetails.ruleId,this.policyDetails).subscribe({
      next: (response) =>{
        this.router.navigate(['policy-list']);
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }


}
