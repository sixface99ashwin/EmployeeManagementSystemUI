import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeDetailsComponent } from './components/employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { DesignationListComponent } from './components/designation/designation-list/designation-list.component';
import { AddDesignationComponent } from './components/designation/add-designation/add-designation.component';
import { EditDesignationComponent } from './components/designation/edit-designation/edit-designation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPolicyComponent } from './components/policy/add-policy/add-policy.component';
import { EditPolicyComponent } from './components/policy/edit-policy/edit-policy.component';
import { PolicyListComponent } from './components/policy/policy-list/policy-list.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { RequestLeaveListComponent } from './components/requestLeave/request-leave-list/request-leave-list.component';
import { AddRequestLeaveComponent } from './components/requestLeave/add-request-leave/add-request-leave.component';
import { EditRequestLeaveComponent } from './components/requestLeave/edit-request-leave/edit-request-leave.component';
import { FilternamePipe } from './Pipe/filtername.pipe';
import { WokingHourListComponent } from './components/workingHour/woking-hour-list/woking-hour-list.component';
import { AddWorkingHourComponent } from './components/workingHour/add-working-hour/add-working-hour.component';
import { EditWorkingHourComponent } from './components/workingHour/edit-working-hour/edit-working-hour.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DesignationListComponent,
    AddDesignationComponent,
    EditDesignationComponent,
    AddPolicyComponent,
    EditPolicyComponent,
    PolicyListComponent,
    RegistrationComponent,
    LoginComponent,
    RequestLeaveListComponent,
    AddRequestLeaveComponent,
    EditRequestLeaveComponent,
    FilternamePipe,
    WokingHourListComponent,
    AddWorkingHourComponent,
    EditWorkingHourComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
