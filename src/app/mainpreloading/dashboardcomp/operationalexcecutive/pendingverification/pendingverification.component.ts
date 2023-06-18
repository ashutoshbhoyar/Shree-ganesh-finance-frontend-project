import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-pendingverification',
  templateUrl: './pendingverification.component.html',
  styleUrls: ['./pendingverification.component.scss']
})
export class PendingverificationComponent {

  constructor(private formbuilder:FormBuilder, private cs:CommonserviceService,private route:Router){}
  customerdata:CustomerDetails[]

 

  ngOnInit():void
  {
    this.cs.getcustomerdata().subscribe((data:CustomerDetails[])=>{
      this.customerdata=data
      
    })
  }

  customersingledata:CustomerDetails

  singlecustomeralldata(info:CustomerDetails){
    alert("Verification form")

    // this.cs.getcustomersibgledata(customerid).subscribe((data1:CustomerDetails[])=>{
    //   this.customersingledata=data1})

  
    this.route.navigate(['./dashboard/operationalexcecutive/documentverification'], 
    {queryParams:{data:JSON.stringify(info)}});
    


  

}
}
