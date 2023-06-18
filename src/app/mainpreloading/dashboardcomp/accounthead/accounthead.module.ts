import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountheadRoutingModule } from './accounthead-routing.module';
import { DisbursmentcompComponent } from './disbursmentcomp/disbursmentcomp.component';
import { LedgergenerateComponent } from './ledgergenerate/ledgergenerate.component';
import { SanctionletterapprovedComponent } from './sanctionletterapproved/sanctionletterapproved.component';


@NgModule({
  declarations: [
    DisbursmentcompComponent,
    LedgergenerateComponent,
    SanctionletterapprovedComponent
  ],
  imports: [
    CommonModule,
    AccountheadRoutingModule
  ]
})
export class AccountheadModule { }
