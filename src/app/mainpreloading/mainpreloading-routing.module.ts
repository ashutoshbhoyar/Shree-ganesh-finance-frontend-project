import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcompComponent } from './aboutcomp/aboutcomp.component';
import { AccountheadModule } from './dashboardcomp/accounthead/accounthead.module';
import { CreditmanagerModule } from './dashboardcomp/creditmanager/creditmanager.module';
import { CustomerModule } from './dashboardcomp/customer/customer.module';
import { CustomercompComponent } from './dashboardcomp/customer/customercomp/customercomp.component';
import { DashboardcompComponent } from './dashboardcomp/dashboardcomp.component';
import { OperationalexcecutiveModule } from './dashboardcomp/operationalexcecutive/operationalexcecutive.module';
import { RelationalexcecutiveModule } from './dashboardcomp/relationalexcecutive/relationalexcecutive.module';
import { DefaultcompComponent } from './defaultcomp/defaultcomp.component';
import { EMIcalculatorComponent } from './emicalculator/emicalculator.component';
import { FooterComponent } from './footer/footer.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { LoginComponent } from './login/login.component';
import { RegistercompComponent } from './registercomp/registercomp.component';

const routes: Routes =
[
  {path:"",component:DefaultcompComponent,
          
          children:[
                    {path:"login", component:LoginComponent},
                    {path:"", component:HomecompComponent},
                    {path:"register",component:RegistercompComponent},
                    {path:"footer",component:FooterComponent},
                    {path:"about",component:AboutcompComponent},
                    {path:"emical",component:EMIcalculatorComponent},
                  
                    

                    ]
  },
  {
    path:"dashboard",component:DashboardcompComponent,

          children:[
        {path:"operationalexcecutive", loadChildren:()=>OperationalexcecutiveModule},
        {path:"relationalexcecutive", loadChildren:()=>RelationalexcecutiveModule},
        {path:"accounthead",loadChildren:()=>AccountheadModule},
        {path:"creditmanager", loadChildren:()=>CreditmanagerModule},
        {path:"customer", loadChildren:()=>CustomerModule},
        // For send data to above component we need to write below code
  {path:"customer/:data",component:CustomercompComponent}
]
  }

      


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpreloadingRoutingModule { }

