import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmmountofloanComponent } from './ammountofloan/ammountofloan.component';
import { GeneratesanctionletterComponent } from './generatesanctionletter/generatesanctionletter.component';
import { NotificationsendtooeComponent } from './notificationsendtooe/notificationsendtooe.component';
import { RateofinterestComponent } from './rateofinterest/rateofinterest.component';
import { VerifydetailsComponent } from './verifydetails/verifydetails.component';

const routes: Routes = [
  {path:"verifydetails",component:VerifydetailsComponent},
  {path:"notificationsendtooe",component:NotificationsendtooeComponent},
  {path:"generatesanctionletter",component:GeneratesanctionletterComponent},
  {path:"ammountofloan",component:AmmountofloanComponent},
  {path:"rateofinterest",component:RateofinterestComponent},
  // for data transfer
  {path:"rateofinterest/:data",component:RateofinterestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditmanagerRoutingModule { }
