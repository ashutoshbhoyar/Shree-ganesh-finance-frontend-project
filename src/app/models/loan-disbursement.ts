import { DealerBankDetails } from "./dealer-bank-details"

export class LoanDisbursement {

	 agreementId:number
	 loanNo:number
	 totalLoanAmount:number
     dealerBankDetails:DealerBankDetails      
	 transferAmount:number
	 paymentStatus:string
	amountPaidDate:string
}
