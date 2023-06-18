import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomercompComponent } from './customercomp/customercomp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayemicompComponent } from './payemicomp/payemicomp.component';


@NgModule({
  declarations: [
    CustomercompComponent,
    PayemicompComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,ReactiveFormsModule, FormsModule
  ], exports:[
    CustomercompComponent, PayemicompComponent
  ]
})
export class CustomerModule { }
