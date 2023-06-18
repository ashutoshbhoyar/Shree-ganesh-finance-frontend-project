import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { AllDocuments } from 'src/app/models/all-documents';
import { CustomerAddress } from 'src/app/models/customer-address';
import { CustomerBankDetails } from 'src/app/models/customer-bank-details';
import { CustomerProfession } from 'src/app/models/customer-profession';
import { CustomerVehicleInformation } from 'src/app/models/customer-vehicle-information';
import { Dealer } from 'src/app/models/dealer';
import { Ledger } from 'src/app/models/ledger';
import { LoanDisbursement } from 'src/app/models/loan-disbursement';
import { SanctionLetter } from 'src/app/models/sanction-letter';




@Component({
  selector: 'app-loanapplication',
  templateUrl: './loanapplication.component.html',
  styleUrls: ['./loanapplication.component.scss']
})
export class LoanapplicationComponent {
  
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private cs:CommonserviceService) {}



ngOnInit() {
}

 
mainform=this._formBuilder.group({ 
 

    personalDetails:this._formBuilder.group({
          customerId: this._formBuilder.control(this.cs.enquiry.enquiryId, Validators.required),
       customerFirstName: this._formBuilder.control(this.cs.enquiry.enquiryFirstName),
       customerMiddleName: this._formBuilder.control(this.cs.enquiry.enquiryMiddleName),
       customerLastName:this._formBuilder.control (this.cs.enquiry.enquiryLastName),
       customerMobileNumber:this._formBuilder.control (this.cs.enquiry.enquiryMobileNumber),
       customerAdditionalMobileNumber: this._formBuilder.control(0,Validators.required),
       customerPanCard:this._formBuilder.control (this.cs.enquiry.enquiryPanCard),
       customerAdhaarCard:this._formBuilder.control (this.cs.enquiry.enquiryAdhaarCard),
       customerDateOfBirth:this._formBuilder.control (this.cs.enquiry.enquiryDateOfBirth),
       customerEmail:this._formBuilder.control (this.cs.enquiry.enquiryEmail),
       customerGender:this._formBuilder.control (this.cs.enquiry.enquiryGender),
       customerQualification: this._formBuilder.control('',Validators.required),
       customerCibilScore:this._formBuilder.control (this.cs.enquiry.enquiryCibilScore),
       customerStatus:this._formBuilder.control (this.cs.enquiry.enquiryStatus),
       customerLoanTenureInMonth:this._formBuilder.control(0),
       customerloanAmountRequired:this._formBuilder.control(0),
      }),
      addressDetails:this._formBuilder.group({
        
      // customerAddress:this._formBuilder.control(''),
       customerAddressId:this._formBuilder.control(0),
      
}),
permanentAddress:this._formBuilder.group({
        
  // customerAddress:this._formBuilder.control(''),
   
  
   permanentAddressId:this._formBuilder.control(0),
   areaname:this._formBuilder.control(''),
   cityname:this._formBuilder.control(''),
   district:this._formBuilder.control(''),
    state:this._formBuilder.control(''),
   pincode:this._formBuilder.control(0),
   houseNumber:this._formBuilder.control(''),
  streetName:this._formBuilder.control(''),
  
}),
localAddress:this._formBuilder.group({
        
  // customerAddress:this._formBuilder.control(''),
   
  
  localAddressId:this._formBuilder.control(0),
   areaname:this._formBuilder.control(''),
   cityname:this._formBuilder.control(''),
   district:this._formBuilder.control(''),
    state:this._formBuilder.control(''),
   pincode:this._formBuilder.control(0),
   houseNumber:this._formBuilder.control(''),
  streetName:this._formBuilder.control(''),
  
}),
       professionDetails:this._formBuilder.group({
       // customerProfession:this._formBuilder.control(''),
        professionId:this._formBuilder.control(0),
        professionType:this._formBuilder.control(''),
        professionMonthlyIncome:this._formBuilder.control(0,Validators.required),
         professionDesignation:this._formBuilder.control(''),
      
      }),
        alldocumentsDetails:this._formBuilder.group({
      // customerAllDocuments:this._formBuilder.control(''),
       documentID:this._formBuilder.control(''),
       addressProof:this._formBuilder.control(''),
       panCard:this._formBuilder.control(''),
       incomeProof:this._formBuilder.control(''),
       addharCard:this._formBuilder.control(''),
       photo:this._formBuilder.control(''),
       signature:this._formBuilder.control(''),
       thumb:this._formBuilder.control(''),
       bankPassbook:this._formBuilder.control(''),
      drivingLicense:this._formBuilder.control(''),
      
      }),
       dealerDetails:this._formBuilder.group({
       
        dealerId:this._formBuilder.control(0),
	     dealerName:this._formBuilder.control(''),
	     dealerAddress:this._formBuilder.control(''),
       dealerEmail:this._formBuilder.control('')
       
      
        }),
        dealerBankDetails:this._formBuilder.group({
          
          dealerBankId:this._formBuilder.control(0),
          dealerBankAccountNo:this._formBuilder.control(0),
          dealerBankName:this._formBuilder.control(''),
          dealerBankBranchName:this._formBuilder.control(''),
          dealerBankIFSCNo:this._formBuilder.control(''),
           }),
       
        loandisbursementDetails:this._formBuilder.group({
         // customerloandisbursement:this._formBuilder.control(''),
          agreementId:this._formBuilder.control(0),
	 loanNo:this._formBuilder.control(0),
	 totalLoanAmount:this._formBuilder.control(0),
  transferAmount:this._formBuilder.control(0),
	 paymentStatus:this._formBuilder.control(''),
	amountPaidDate:this._formBuilder.control(''),
  }),
        ledgerDetails:this._formBuilder.group([{
          
          ledgerId:this._formBuilder.control(0),
ledgerCreatedDate:this._formBuilder.control(''),
totalLoanAmount:this._formBuilder.control(0),
payableAmountwithInterest:this._formBuilder.control(0),
tenure:this._formBuilder.control(0),
monthlyEMI:this._formBuilder.control(0),
amountPaidtillDate:this._formBuilder.control(0),
remainingAmount:this._formBuilder.control(0),
nextEmiDatestart:this._formBuilder.control(''),
nextEmiDateEnd:this._formBuilder.control(''),
defaulterCount:this._formBuilder.control(0),
previousEmitStatus:this._formBuilder.control(''),
currentMonthEmiStatus:this._formBuilder.control(''),
loanEndDate:this._formBuilder.control(''),
loanStatus:this._formBuilder.control(''),
        }]),
        SanctionLetterDetails:this._formBuilder.group({
         
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
         totalLoanAmountWithInterest:this._formBuilder.control(0),
        }),
        VehicleInformationDetails:this._formBuilder.group({
          
        customerVehicleId:this._formBuilder.control(0),
	      customerVehicleModel:this._formBuilder.control(''),
	      customerVehicleChasisNo:this._formBuilder.control(''),
	       customerVehicleNo:this._formBuilder.control(''),
	       customerVehicleRcNo:this._formBuilder.control(''),
         customerVehiclePrice:this._formBuilder.control(0),
        }),
        customerbankDetails:this._formBuilder.group({
          //customerBankDetails: 
          customerBankId:this._formBuilder.control(0),
 customerBankAccountNo:this._formBuilder.control(0),
 customerBankName:this._formBuilder.control(''),
	customerBankBranchName:this._formBuilder.control(''),
	customerBankIfscNo:this._formBuilder.control(''),
        })
      })

     

onselectfile1(event){
  
  this.cs.customerAllDocuments.addressProof=event.target.files[0];
  console.log(this.cs.customerAllDocuments.addressProof)
  }
onselectfile2(event){
    this.cs.customerAllDocuments.addharCard=event.target.files[0];
    }
onselectfile3(event){
      this.cs.customerAllDocuments.bankPassbook=event.target.files[0];
      }
onselectfile4(event){
        this.cs.customerAllDocuments.drivingLicense=event.target.files[0];
        }
onselectfile5(event){
          this.cs.customerAllDocuments.incomeProof=event.target.files[0];
          }
onselectfile6(event){
            this.cs.customerAllDocuments.panCard=event.target.files[0];
            }
onselectfile7(event){
              this.cs.customerAllDocuments.photo=event.target.files[0];
              }
 onselectfile8(event){
                this.cs.customerAllDocuments.signature=event.target.files[0];
                }
onselectfile9(event){
                  this.cs.customerAllDocuments.thumb=event.target.files[0];
                  }

save(){
  alert("enter save")
this.cs.customerdetails.customerId=this.mainform.get("personalDetails").get("customerId").value;
this.cs.customerdetails.customerFirstName=this.mainform.get("personalDetails").get("customerFirstName").value;
this.cs.customerdetails.customerMiddleName=this.mainform.get("personalDetails").get("customerMiddleName").value;
this.cs.customerdetails.customerLastName=this.mainform.get("personalDetails").get("customerLastName").value;
this.cs.customerdetails.customerMobileNumber=this.mainform.get("personalDetails").get("customerMobileNumber").value;
this.cs.customerdetails.customerAdditionalMobileNumber=this.mainform.get("personalDetails").get("customerAdditionalMobileNumber").value;
this.cs.customerdetails.customerPanCard=this.mainform.get("personalDetails").get("customerPanCard").value;
this.cs.customerdetails.customerAdhaarCard=this.mainform.get("personalDetails").get("customerAdhaarCard").value;
this.cs.customerdetails.customerDateOfBirth=this.mainform.get("personalDetails").get("customerDateOfBirth").value;
this.cs.customerdetails.customerEmail=this.mainform.get("personalDetails").get("customerEmail").value;
this.cs.customerdetails.customerGender=this.mainform.get("personalDetails").get("customerGender").value;
this.cs.customerdetails.customerCibilScore=this.mainform.get("personalDetails").get("customerCibilScore").value;
this.cs.customerdetails.customerStatus=this.mainform.get("personalDetails").get("customerStatus").value;
this.cs.customerdetails.customerQualification=this.mainform.get("personalDetails").get("customerQualification").value;
this.cs.customerdetails.customerLoanTenureInMonth=this.mainform.get("personalDetails").get("customerLoanTenureInMonth").value;
this.cs.customerdetails.customerloanAmountRequired=this.mainform.get("personalDetails").get("customerloanAmountRequired").value;


this.cs.customerdetails.customerAddress.customerAddressId=this.mainform.get("addressDetails").get("customerAddressId").value;
this.cs.customerdetails.customerAddress.localAddress=this.mainform.get("localAddress").value;
this.cs.customerdetails.customerAddress.localAddress.localAddressId=this.mainform.get("localAddress").get("localAddressId").value;
this.cs.customerdetails.customerAddress.permanentAddress=this.mainform.get("permanentAddress").value;
this.cs.customerdetails.customerAddress.permanentAddress.permanentAddressId=this.mainform.get("permanentAddress").get("permanentAddressId").value;


this.cs.customerdetails.customerProfession=this.mainform.get("professionDetails").value;
this.cs.customerdetails.customerProfession.professionId=this.mainform.get("professionDetails").get("professionId").value;

this.cs.customerdetails.customerDealer.dealerId=this.mainform.get("dealerDetails").get("dealerId").value;
this.cs.customerdetails.customerDealer.dealerName=this.mainform.get("dealerDetails").get("dealerName").value;
this.cs.customerdetails.customerDealer.dealerAddress=this.mainform.get("dealerDetails").get("dealerAddress").value;
this.cs.customerdetails.customerDealer.dealerEmail=this.mainform.get("dealerDetails").get("dealerEmail").value;



this.cs.customerdetails.customerDealer.dealerBankDetails=this.mainform.get("dealerBankDetails").value;
this.cs.customerdetails.customerDealer.dealerBankDetails.dealerBankId=this.mainform.get("dealerBankDetails").get("dealerBankId").value;

this.cs.customerdetails.customerloandisbursement.agreementId=this.mainform.get("loandisbursementDetails").get("agreementId").value;

//this.cs.customerdetails.customerledger=this.mainform.get("ledgerDetails").value;
//this.cs.customerdetails.customerledger=this.mainform.get("ledgerDetails").get("ledgerId").value;

this.cs.customerdetails.customerSanctionLetter=this.mainform.get("SanctionLetterDetails").value;
this.cs.customerdetails.customerSanctionLetter.sanctionId=this.mainform.get("SanctionLetterDetails").get("sanctionId").value;

this.cs.customerdetails.customerVehicleInformation=this.mainform.get("VehicleInformationDetails").value;
this.cs.customerdetails.customerVehicleInformation.customerVehicleId=this.mainform.get("VehicleInformationDetails").get("customerVehicleId").value;

this.cs.customerdetails.customerBankDetails=this.mainform.get("customerbankDetails").value;
this.cs.customerdetails.customerBankDetails.customerBankId=this.mainform.get("customerbankDetails").get("customerBankId").value;

let data=new FormData();
let customerDetails=JSON.stringify(this.cs.customerdetails);
alert(this.cs.customerdetails.customerFirstName)


data.append("customerDetails",customerDetails);
data.append("addressProof",this.cs.customerAllDocuments.addressProof);
data.append("addharCard",this.cs.customerAllDocuments.addharCard);
data.append("bankPassbook",this.cs.customerAllDocuments.bankPassbook);
data.append("drivingLicense",this.cs.customerAllDocuments.drivingLicense);
data.append("incomeProof",this.cs.customerAllDocuments.incomeProof);
data.append("panCard",this.cs.customerAllDocuments.panCard);
data.append("photo",this.cs.customerAllDocuments.photo);
data.append("signature",this.cs.customerAllDocuments.signature);
data.append("thumb",this.cs.customerAllDocuments.thumb);

alert("exit save")


this.cs.customerLoanFormSubmit(data).subscribe();
          
}

}

