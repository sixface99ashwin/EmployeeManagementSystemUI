import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestLeaveService } from 'src/app/services/requestLeave/request-leave.service';

@Component({
  selector: 'app-add-request-leave',
  templateUrl: './add-request-leave.component.html',
  styleUrls: ['./add-request-leave.component.css']
})
export class AddRequestLeaveComponent implements OnInit {

  requestLeaveform:FormGroup;
  result:string;

  constructor(private fb:FormBuilder, private requestleaveService:RequestLeaveService, private router:Router) { }


  ngOnInit(): void {
    this.requestLeaveform=this.fb.group({
      leaveType:['',Validators.required],
      fromDate:['',Validators.required],
      toDate:['',Validators.required],
      empId:['',Validators.required]

    })
  }
  submitRequest(){
    if(this.requestLeaveform.valid){
      console.log(this.requestLeaveform.value)
      this.requestleaveService.addRequestleave(this.requestLeaveform.value).subscribe({
        next:(res)=>{
          console.log(res);
          this.router.navigate(['employee-list']);
        },
        error:(err)=>{
          console.log(err?.error.message)
          alert(err?.error.message)
        }
      });
    }
    else{
      console.log("Form is not valid");
      this.validateFormField(this.requestLeaveform);
      alert("Your form is invalid")
    }
  }
  private validateFormField(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateFormField(control)
      }
    })
  }
}
