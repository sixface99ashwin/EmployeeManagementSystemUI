import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WorkingHourService } from 'src/app/services/workingHour/working-hour.service';

import { AddWorkingHourComponent } from './add-working-hour.component';

describe('AddWorkingHourComponent', () => {
  let component: AddWorkingHourComponent;
  let fixture: ComponentFixture<AddWorkingHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkingHourComponent ],
      imports:[
        RouterModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule
      ],
      providers:[WorkingHourService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkingHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
