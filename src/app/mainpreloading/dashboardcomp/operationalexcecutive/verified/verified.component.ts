import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.scss']
})
export class VerifiedComponent 
{
  constructor(private cs:CommonserviceService)
  {

  }

  vdata:CustomerDetails[];

  ngOnInit()
  {
    this.cs.getDocVerifiedCustomer().subscribe((data:CustomerDetails[])=>{
      this.vdata=data

      console.log(data);
    })
  }

}
