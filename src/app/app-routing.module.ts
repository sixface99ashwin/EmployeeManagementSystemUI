import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDesignationComponent } from './components/designation/add-designation/add-designation.component';
import { DesignationListComponent } from './components/designation/designation-list/designation-list.component';
import { EditDesignationComponent } from './components/designation/edit-designation/edit-designation.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './components/employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { AddPolicyComponent } from './components/policy/add-policy/add-policy.component';
import { EditPolicyComponent } from './components/policy/edit-policy/edit-policy.component';
import { PolicyListComponent } from './components/policy/policy-list/policy-list.component';
import { AddRequestLeaveComponent } from './components/requestLeave/add-request-leave/add-request-leave.component';
import { EditRequestLeaveComponent } from './components/requestLeave/edit-request-leave/edit-request-leave.component';
import { RequestLeaveListComponent } from './components/requestLeave/request-leave-list/request-leave-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { AddWorkingHourComponent } from './components/workingHour/add-working-hour/add-working-hour.component';
import { EditWorkingHourComponent } from './components/workingHour/edit-working-hour/edit-working-hour.component';
import { WokingHourListComponent } from './components/workingHour/woking-hour-list/woking-hour-list.component';

const routes: Routes = [
  {path:'', component:EmployeeListComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'employee/edit/:id',component:EditEmployeeComponent},
  {path:'employee/view/:id',component:EmployeeDetailsComponent},
  {path:'employee/add',component:AddEmployeeComponent},
  {path:'designation-list',component:DesignationListComponent},
  {path:'designation/edit/:id',component:EditDesignationComponent},
  {path:'designation/add',component:AddDesignationComponent},
  {path:'policy-list',component:PolicyListComponent},
  {path:'policy/edit/:id',component:EditPolicyComponent},
  {path:'policy/add',component:AddPolicyComponent},
  {path:'user/login',component:LoginComponent},
  {path:'user/registration',component:RegistrationComponent},
  {path:'add/leaverequest',component:AddRequestLeaveComponent},
  {path:'requestleave/list',component:RequestLeaveListComponent},
  {path:'requestLeave/add',component:AddRequestLeaveComponent},
  {path:'requestLeave/edit/:id',component:EditRequestLeaveComponent},
  {path:'workingHour/list',component:WokingHourListComponent},
  {path:'workingHour/add',component:AddWorkingHourComponent},
  {path:'workingHour/edit/:id',component:EditWorkingHourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
