import { AllDocuments } from "./all-documents"
import { CustomerAddress } from "./customer-address"
import { CustomerBankDetails } from "./customer-bank-details"
import { CustomerProfession } from "./customer-profession"
import { CustomerVehicleInformation } from "./customer-vehicle-information"
import { Dealer } from "./dealer"
import { Ledger } from "./ledger"
import { LoanDisbursement } from "./loan-disbursement"
import { SanctionLetter } from "./sanction-letter"

export class CustomerDetails {

    customerId:number
	 customerFirstName:string
		customerMiddleName:string
	 customerLastName:string
	 customerMobileNumber:number
   customerAdditionalMobileNumber:number
	 customerPanCard:string
	 customerAdhaarCard:number
	 customerLoanTenureInMonth:number
	 customerDateOfBirth:string
	customerEmail:string
	customerGender:string
	customerQualification;
	customerCibilScore:number
	customerStatus:string
	 customerAllDocuments:AllDocuments
     customerAddress:CustomerAddress 
    customerProfession: CustomerProfession
	  customerDealer:Dealer
	customerloandisbursement:LoanDisbursement
  customerledger:Ledger[]
  customerSanctionLetter:SanctionLetter
	customerVehicleInformation:CustomerVehicleInformation
	customerBankDetails: CustomerBankDetails
	customerloanAmountRequired:number
}
