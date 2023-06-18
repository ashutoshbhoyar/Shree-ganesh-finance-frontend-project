import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { Enquiry } from 'src/app/models/enquiry';

@Component({
  selector: 'app-loanfillupform',
  templateUrl: './loanfillupform.component.html',
  styleUrls: ['./loanfillupform.component.scss']
})
export class LoanfillupformComponent {

  constructor(private cs:CommonserviceService, private route:Router){}

  sdata:Enquiry[]
  
  ngOnInit():void
  {
    this.cs.getsingledata().subscribe((data:Enquiry[])=>{
      this.sdata=data
    })
  }

  fillloanForm(enquiry:Enquiry)
  {
    alert("loan application")
    this.cs.enquiry=Object.assign({},enquiry)
    this.route.navigate(['dashboard/relationalexcecutive/loanapplication'])
  }

}
