import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RequestLeaveService } from 'src/app/services/requestLeave/request-leave.service';

import { RequestLeaveListComponent } from './request-leave-list.component';

describe('RequestLeaveListComponent', () => {
  let component: RequestLeaveListComponent;
  let fixture: ComponentFixture<RequestLeaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLeaveListComponent ],
      imports:[
        RouterModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule
      ],
      providers:[RequestLeaveService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestLeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
