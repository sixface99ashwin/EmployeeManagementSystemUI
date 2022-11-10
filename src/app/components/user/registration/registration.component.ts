import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm:FormGroup;
  result:string;
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash"
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { }


  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]

    })
  }

  hideShowPassword(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text":this.type="password";
  }
  onRegister(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this.userService.register(this.registerForm.value).subscribe({
        next:(res)=>{
          this.result=res;
          console.log(this.result);
          this.router.navigate(['user/login']);
        },
        error:(err)=>{
          console.log(err?.error.message)
          alert(err?.error.message)
        }
      });
    }
    else{
      console.log("Form is not valid");
      this.validateFormField(this.registerForm);
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
