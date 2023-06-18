import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomercompComponent } from './customercomp/customercomp.component';
import { PayemicompComponent } from './payemicomp/payemicomp.component';

const routes: Routes = [

  {path:"customercomp",component:CustomercompComponent},
  {path:"payemicomp",component:PayemicompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
