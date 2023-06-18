import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-verifyform',
  templateUrl: './verifyform.component.html',
  styleUrls: ['./verifyform.component.scss']
})
export class VerifyformComponent
{
  constructor(private cs:CommonserviceService)
  {

  }

  vdata:CustomerDetails[];

  ngOnInit()
  {
    this.cs.getDocRjectedCustomer().subscribe((data:CustomerDetails[])=>{
      this.vdata=data

      console.log(data);
    })
  }

}
