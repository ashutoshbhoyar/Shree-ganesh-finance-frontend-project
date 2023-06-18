import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditmanagerRoutingModule } from './creditmanager-routing.module';
import { RateofinterestComponent } from './rateofinterest/rateofinterest.component';
import { AmmountofloanComponent } from './ammountofloan/ammountofloan.component';
import { GeneratesanctionletterComponent } from './generatesanctionletter/generatesanctionletter.component';
import { NotificationsendtooeComponent } from './notificationsendtooe/notificationsendtooe.component';
import { VerifydetailsComponent } from './verifydetails/verifydetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    RateofinterestComponent,
    AmmountofloanComponent,
    GeneratesanctionletterComponent,
    NotificationsendtooeComponent,
    VerifydetailsComponent
  ],
  imports: [
    CommonModule,
    CreditmanagerRoutingModule,ReactiveFormsModule, FormsModule, MatPaginatorModule, 
    MatTableModule ,MatSortModule ,MatFormFieldModule ,MatInputModule, MatButtonModule
  ]
})
export class CreditmanagerModule { }
