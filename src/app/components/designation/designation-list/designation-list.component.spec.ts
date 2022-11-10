import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DesignationListComponent } from './designation-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DesignationService } from 'src/app/services/designation/designation.service';

describe('DesignationListComponent', () => {
  let component: DesignationListComponent;
  let fixture: ComponentFixture<DesignationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationListComponent ],
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

    fixture = TestBed.createComponent(DesignationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
