import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';
import { DealerBankDetails } from 'src/app/models/dealer-bank-details';
import { LoanDisbursement } from 'src/app/models/loan-disbursement';

@Component({
  selector: 'app-disbursmentcomp',
  templateUrl: './disbursmentcomp.component.html',
  styleUrls: ['./disbursmentcomp.component.scss']
})
export class DisbursmentcompComponent {
constructor(private _formBuilder:FormBuilder,private cs:CommonserviceService){}
customerdata: CustomerDetails[];
ngOnInit()
{
 this.cs.getAllSanctionLetterSignByCustomer().subscribe((data:CustomerDetails[])=>{
   this.customerdata=data
})
}



DisburseLoan(cusomerid:number)
{     
  alert("ts");
  alert(cusomerid)
     return this.cs.loanDisbursment(cusomerid).subscribe();

}
}
