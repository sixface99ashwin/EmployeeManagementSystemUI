import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  Logindetails:number;
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash"

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(3)]]

    })
  }
  hideShowPassword(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text":this.type="password";
  }
  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.userService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          // console.log(res);
          console.log(res.user.FirstName);
          alert("Successfully logined");
          localStorage.setItem('authToken',res.token);
          localStorage.setItem('userId',JSON.stringify(res.user.FirstName))
          localStorage.setItem('useremail',JSON.stringify(res.user.emailId))
          this.router.navigate(['employee-list']);

        },
        error:(err)=>{
          alert(err?.error.message)
        }
      });
    }
    else{
      console.log("Form is not valid");
      this.validateFormField(this.loginForm);
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
