import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-rateofinterest',
  templateUrl: './rateofinterest.component.html',
  styleUrls: ['./rateofinterest.component.scss']
})
export class RateofinterestComponent {


  constructor(private _formBuilder:FormBuilder, private cs:CommonserviceService,private route:Router,
    private ActivatedRoute:ActivatedRoute ){}

    
    maximumloanAmount:number
    monthlyEmiAmount:number
    value1:number
    value2:number
    temprateofinterrest:number
    value3:number
    totalpaybleamount:number

    customersingledata:CustomerDetails

  ngOnInit():void{

    this.ActivatedRoute.queryParams.subscribe((params)=>{
      console.log(params)
     this.customersingledata=JSON.parse(params['data']);
     console.log(this.customersingledata.customerId)

     this.maximumloanAmount=(((this.customersingledata.customerProfession.professionMonthlyIncome)*30)/100)*12*4;

     
})
  }
  SanctionLetterDetails=this._formBuilder.group({
         
    sanctionId:this._formBuilder.control(0),
    sanctionDate:this._formBuilder.control(''),
  applicantName:this._formBuilder.control(''),
    contactDetails:this._formBuilder.control(0),
    loanAmountSanctioned:this._formBuilder.control(0),
    rateOfInterest:this._formBuilder.control(0),
     loanTenure:this._formBuilder.control(0),
    monthlyEmiAmount:this._formBuilder.control(0),
    termsCondition:this._formBuilder.control(''),
   sactionStatus:this._formBuilder.control(''),
   sactionLetter:this._formBuilder.control(''),
  })

  
calculateEMI(){

  
this.temprateofinterrest=((this.SanctionLetterDetails.get("rateOfInterest").value)/12)/100;
alert(this.temprateofinterrest)
this.value1=(1+(this.temprateofinterrest))**(this.customersingledata.customerLoanTenureInMonth);
alert(this.value1)
this.value2=(this.value1)-1
alert(this.value2)
this.value3=(this.SanctionLetterDetails.get("loanAmountSanctioned").value)*(this.temprateofinterrest)*(this.value1)
alert(this.value3)
this.monthlyEmiAmount=(this.value3/(this.value2))

this.totalpaybleamount=(this.monthlyEmiAmount)*(this.customersingledata.customerLoanTenureInMonth)

}
  

  sanctionletterSubmit(customerdata:CustomerDetails){
    

    
   
    customerdata.customerSanctionLetter.applicantName=customerdata.customerFirstName+" "+customerdata.customerMiddleName+" "+customerdata.customerLastName ;
    customerdata.customerSanctionLetter.loanAmountSanctioned=this.SanctionLetterDetails.get("loanAmountSanctioned").value;
    customerdata.customerSanctionLetter.rateOfInterest=this.SanctionLetterDetails.get("rateOfInterest").value;
    customerdata.customerSanctionLetter.monthlyEmiAmount=this.monthlyEmiAmount;
    customerdata.customerSanctionLetter.sanctionDate=this.SanctionLetterDetails.get("sanctionDate").value;
    customerdata.customerSanctionLetter.loanTenure=this.customersingledata.customerLoanTenureInMonth;
    customerdata.customerSanctionLetter.totalLoanAmountWithInterest=this.totalpaybleamount;
    customerdata.customerSanctionLetter.contactDetails=customerdata.customerMobileNumber;
    this.cs.customerdetails=customerdata;

    alert(customerdata.customerSanctionLetter.monthlyEmiAmount)
    alert(customerdata.customerSanctionLetter.sanctionDate)
  
    this.cs.customerSanctionLetterSave(customerdata).subscribe();
          
  }


}
