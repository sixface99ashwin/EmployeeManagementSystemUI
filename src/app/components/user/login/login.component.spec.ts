import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user/user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        RouterModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,

      ],
      providers:[UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email-check] - should check users email address is invalid', () => {
    let emailid=component.loginForm.controls['email'];
    expect(emailid.valid).toBeFalsy();
    expect(emailid.pristine).toBeTruthy();
    expect(emailid.errors['required']).toBeTruthy();
    emailid.setValue('abc');

    expect(emailid.errors['email']).toBeTruthy();
  });
  it('[Email-Check] - should check users correct email address is entered', ()=>{
    let emailid=component.loginForm.controls['email'];
    emailid.setValue('abc@gmail.com')
    expect(emailid.errors).toBeNull();
  });
  it('[Password-Check]-should check password errors',()=>{
    let pwd = component.loginForm.controls['password'];
    expect(pwd.errors['required']).toBeTruthy();
    pwd.setValue('12');
    expect(pwd.errors['minlength']).toBeTruthy();
  });
  it('[Password-Check]- should check password validity',()=>{
    let pwd =component.loginForm.controls['password'];
    pwd.setValue('123456')
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
  });
  it('[Form-Check] - should check form is valid or not if no values entered',()=>{
    expect(component.loginForm.valid).toBeFalsy();
  })
  it('[Form-Check] - should check form is valid or not when values entered',()=>{
    component.loginForm.controls['email'].setValue('abc@xyz.com');
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });


});

