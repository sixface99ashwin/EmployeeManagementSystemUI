import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentRuleService } from 'src/app/services/paymentRule/payment-rule.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditPolicyComponent } from './edit-policy.component';

describe('EditPolicyComponent', () => {
  let component: EditPolicyComponent;
  let fixture: ComponentFixture<EditPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPolicyComponent ],
      imports:[
        RouterModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule
      ],
      providers:[PaymentRuleService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
