import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationalexcecutiveRoutingModule } from './relationalexcecutive-routing.module';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { CibilcheckComponent } from './cibilcheck/cibilcheck.component';
import { LoanfillupformComponent } from './loanfillupform/loanfillupform.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoanapplicationComponent } from '../../loanapplication/loanapplication.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { SanctionsignComponent } from './sanctionsign/sanctionsign.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    EnquiryformComponent,
    CibilcheckComponent,
    LoanfillupformComponent,
    LoanapplicationComponent,
    SanctionsignComponent
  ],
  imports: [
    CommonModule,
    RelationalexcecutiveRoutingModule,
    MatFormFieldModule,ReactiveFormsModule,
    MatButtonModule,MatIconModule,MatStepperModule,MatInputModule,MatTableModule,MatPaginatorModule,MatSortModule, 
    FormsModule, MatSelectModule
  ],
  exports:[
    LoanapplicationComponent
  ]
})
export class RelationalexcecutiveModule { }
