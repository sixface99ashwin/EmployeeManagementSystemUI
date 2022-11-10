import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignationService } from 'src/app/services/designation/designation.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditDesignationComponent } from './edit-designation.component';

describe('EditDesignationComponent', () => {
  let component: EditDesignationComponent;
  let fixture: ComponentFixture<EditDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesignationComponent ],
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

    fixture = TestBed.createComponent(EditDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
