import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumnetverificationComponent } from './documnetverification/documnetverification.component';
import { PendingverificationComponent } from './pendingverification/pendingverification.component';
import { SendsanctionmailComponent } from './sendsanctionmail/sendsanctionmail.component';
import { VerifiedComponent } from './verified/verified.component';
import { VerifyformComponent } from './verifyform/verifyform.component';

const routes: Routes = [
  {path:"pendingverification",component:PendingverificationComponent},
  {path:"sendsanctionmail",component:SendsanctionmailComponent},
  {path:"verified",component:VerifiedComponent},
  {path:"verifyform",component:VerifyformComponent},
  {path:"documentverification",component:DocumnetverificationComponent},
  // For send data to above component we need to write below code
  {path:"documentverification/:data",component:DocumnetverificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalexcecutiveRoutingModule { }
