import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-sanctionletterapproved',
  templateUrl: './sanctionletterapproved.component.html',
  styleUrls: ['./sanctionletterapproved.component.scss']
})
export class SanctionletterapprovedComponent
 {
   constructor(private fb:FormBuilder,private cs:CommonserviceService){}
   customerdata: CustomerDetails[];

   ngOnInit()
   {
    this.cs.getAllGeneratedSanctionByCm().subscribe((data:CustomerDetails[])=>{
      this.customerdata=data
   })
   }

   changecustomerstatusapprove(customerId:number,status:string)
   {
    alert("sanction approved")
    this.cs.CustomerSanctionApproveddData(customerId,status).subscribe()
   }

   changecustomerstatusreject(customerId:number,status:string)
   {
    alert("sanction reject")
    this.cs.CustomerSanctionApproveddData(customerId,status).subscribe()
   }
   
 }
