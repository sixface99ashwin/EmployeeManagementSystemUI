import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddDesignationComponent } from './add-designation.component';
import { DesignationService } from 'src/app/services/designation/designation.service';

describe('AddDesignationComponent', () => {
  let component: AddDesignationComponent;
  let fixture: ComponentFixture<AddDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesignationComponent ],
      imports:[
        RouterModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule
      ],
      providers:[DesignationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
