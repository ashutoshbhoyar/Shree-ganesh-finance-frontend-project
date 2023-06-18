import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalexcecutiveRoutingModule } from './operationalexcecutive-routing.module';
import { VerifyformComponent } from './verifyform/verifyform.component';
import { VerifiedComponent } from './verified/verified.component';
import { PendingverificationComponent } from './pendingverification/pendingverification.component';
import { SendsanctionmailComponent } from './sendsanctionmail/sendsanctionmail.component';
import { DocumnetverificationComponent } from './documnetverification/documnetverification.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VerifyformComponent,
    VerifiedComponent,
    PendingverificationComponent,
    SendsanctionmailComponent,
    DocumnetverificationComponent
  ],
  imports: [
    CommonModule,
    OperationalexcecutiveRoutingModule,
    MatFormFieldModule,
    MatButtonModule,MatIconModule,MatStepperModule,MatInputModule,ReactiveFormsModule
  ],
  exports:[
    VerifyformComponent,
    VerifiedComponent,
    PendingverificationComponent,
    SendsanctionmailComponent,
    DocumnetverificationComponent

  ]
})
export class OperationalexcecutiveModule { }
