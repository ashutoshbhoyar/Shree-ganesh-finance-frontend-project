import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisbursmentcompComponent } from './disbursmentcomp/disbursmentcomp.component';
import { LedgergenerateComponent } from './ledgergenerate/ledgergenerate.component';
import { SanctionletterapprovedComponent } from './sanctionletterapproved/sanctionletterapproved.component';

const routes: Routes = [

  {path:"disburseammount",component:DisbursmentcompComponent},
  {path:"ledgergenerate",component:LedgergenerateComponent},
  {path:"sanctionletterapproved",component:SanctionletterapprovedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountheadRoutingModule { }
