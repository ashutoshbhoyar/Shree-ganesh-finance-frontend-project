import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-customercomp',
  templateUrl: './customercomp.component.html',
  styleUrls: ['./customercomp.component.scss']
})
export class CustomercompComponent {
constructor(private activeroute:ActivatedRoute, private router:Router){}

customerdata:CustomerDetails;


customerstatus:false

  ngOnInit(){

    this.activeroute.queryParams.subscribe((params)=>{
      console.log(params)
     this.customerdata=JSON.parse(params['data']);
     console.log(this.customerdata.customerId)
})
  }

  checkifSaveEnabled():any{
    if(this.customerdata.customerStatus==="loandisbursed"){
      return true;
    }
    return false;

  }

  payemi(customerdata:CustomerDetails){
    alert("hi")

    this.router.navigate(['./dashboard/customer/payemicomp'],
    {queryParams:{data:JSON.stringify(customerdata)}}); 
    
  }

}
