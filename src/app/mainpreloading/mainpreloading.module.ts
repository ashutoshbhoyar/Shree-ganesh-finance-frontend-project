import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpreloadingRoutingModule } from './mainpreloading-routing.module';
import { AboutcompComponent } from './aboutcomp/aboutcomp.component';
import { DashboardcompComponent } from './dashboardcomp/dashboardcomp.component';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { OperationalexcecutiveModule } from './dashboardcomp/operationalexcecutive/operationalexcecutive.module';
import { RelationalexcecutiveModule } from './dashboardcomp/relationalexcecutive/relationalexcecutive.module';
import { CreditmanagerModule } from './dashboardcomp/creditmanager/creditmanager.module';
import { AccountheadModule } from './dashboardcomp/accounthead/accounthead.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountheadRoutingModule } from './dashboardcomp/accounthead/accounthead-routing.module';
import { CreditmanagerRoutingModule } from './dashboardcomp/creditmanager/creditmanager-routing.module';
import { OperationalexcecutiveRoutingModule } from './dashboardcomp/operationalexcecutive/operationalexcecutive-routing.module';
import { RelationalexcecutiveRoutingModule } from './dashboardcomp/relationalexcecutive/relationalexcecutive-routing.module';
import { EMIcalculatorComponent } from './emicalculator/emicalculator.component';

import {MatStepperModule} from '@angular/material/stepper';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';

import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { Ng5SliderModule } from 'ng5-slider';
import { CustomerModule } from './dashboardcomp/customer/customer.module';






@NgModule({
  declarations: [
    AboutcompComponent,
    DashboardcompComponent,
    DefaultcompComponent,
    HomecompComponent,
    RegistercompComponent,
    FooterComponent,
    LoginComponent,
    EMIcalculatorComponent,
   
 

   
    
   
  ],
  imports: [
CommonModule,
ReactiveFormsModule,
IvyCarouselModule,
Ng5SliderModule,
FormsModule, 
BrowserModule, 
MainpreloadingRoutingModule,
OperationalexcecutiveModule,
RelationalexcecutiveModule,
    CreditmanagerModule,
    AccountheadModule,
    AccountheadRoutingModule,
    CreditmanagerRoutingModule,
    OperationalexcecutiveRoutingModule,
    RelationalexcecutiveRoutingModule,
    MatStepperModule, CustomerModule
   
  ],
  exports:[
    AboutcompComponent,
    DashboardcompComponent,
    DefaultcompComponent,
    HomecompComponent,
    RegistercompComponent,
    FooterComponent,
    EMIcalculatorComponent,
    LoginComponent,
   
 


  ]
})
export class MainpreloadingModule { }
