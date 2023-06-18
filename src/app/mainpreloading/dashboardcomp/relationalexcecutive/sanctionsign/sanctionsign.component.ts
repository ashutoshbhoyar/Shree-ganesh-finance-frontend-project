import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-sanctionsign',
  templateUrl: './sanctionsign.component.html',
  styleUrls: ['./sanctionsign.component.scss']
})
export class SanctionsignComponent {
 constructor(private fb:FormBuilder,private cs:CommonserviceService){}

 customerdata: CustomerDetails[];

 ngOnInit()
 {
  this.cs. getAllSAnctionApprovedDataByAh().subscribe((data:CustomerDetails[])=>{
    this.customerdata=data
 })
 }

 changecustomerstatusapprove(customerId:number,status:string)
 {
  alert("sanction sign by customer")
  this.cs.CustomerSanctionApproveddData(customerId,status).subscribe()
 }

 changecustomerstatusreject(customerId:number,status:string)
 {
  alert("sanction not sign by customer")
  this.cs.CustomerSanctionApproveddData(customerId,status).subscribe()
 }
 
}
