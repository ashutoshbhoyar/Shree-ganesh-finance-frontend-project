import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanapplicationComponent } from '../../loanapplication/loanapplication.component';
import { CibilcheckComponent } from './cibilcheck/cibilcheck.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { LoanfillupformComponent } from './loanfillupform/loanfillupform.component';
import { SanctionsignComponent } from './sanctionsign/sanctionsign.component';






const routes: Routes = [
  {path:"enquiryform",component:EnquiryformComponent},
  {path:"cibilcheck",component:CibilcheckComponent},
  {path:"loanfillupform",component:LoanfillupformComponent},
  {path:"loanapplication",component:LoanapplicationComponent},
  {path:"sanctionsign",component:SanctionsignComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationalexcecutiveRoutingModule { }
