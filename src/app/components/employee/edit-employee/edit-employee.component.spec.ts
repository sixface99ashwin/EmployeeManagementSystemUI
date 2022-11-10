import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { EditEmployeeComponent } from './edit-employee.component';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditEmployeeComponent', () => {
  let component: EditEmployeeComponent;
  let fixture: ComponentFixture<EditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeComponent ],
      imports:[
        RouterModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers:[EmployeeService]
        })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
