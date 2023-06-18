import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllDocuments } from '../models/all-documents';
import { CustomerAddress } from '../models/customer-address';
import { CustomerBankDetails } from '../models/customer-bank-details';
import { CustomerDetails } from '../models/customer-details';
import { CustomerProfession } from '../models/customer-profession';
import { CustomerVehicleInformation } from '../models/customer-vehicle-information';
import { Dealer } from '../models/dealer';
import { Enquiry } from '../models/enquiry';
import { Ledger } from '../models/ledger';
import { LoanDisbursement } from '../models/loan-disbursement';
import { SanctionLetter } from '../models/sanction-letter';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  getDocRejectedCustomer() {
    throw new Error('Method not implemented.');
  }
  
 enquiry:Enquiry={
   enquiryId: 0,
   enquiryFirstName: undefined,
   enquiryMiddleName: undefined,
   enquiryLastName: undefined,
   enquiryMobileNumber: 0,
   enquiryPanCard: undefined,
   enquiryAdhaarCard: undefined,
   enquiryAddress: undefined,
   enquiryDateOfBirth: undefined,
   enquiryEmail: undefined,
   enquiryGender: undefined,
   enquiryCibilScore: 0,
   enquiryStatus: undefined
 }
 customerdetails:CustomerDetails={
   customerId: 0,
   customerFirstName: '',
   customerMiddleName: '',
   customerLastName: '',
   customerMobileNumber: 0,
   customerAdditionalMobileNumber: 0,
   customerPanCard: '',
   customerAdhaarCard: 0,
   customerDateOfBirth: '',
   customerEmail: '',
   customerGender: '',
   customerQualification: undefined,
   customerLoanTenureInMonth: 0,
   customerCibilScore: 0,
   customerStatus: '',
   customerAllDocuments: new AllDocuments,
   customerAddress: new CustomerAddress,
   customerProfession: new CustomerProfession,
   customerDealer: new Dealer,
   customerloandisbursement: new LoanDisbursement,
   customerVehicleInformation: new CustomerVehicleInformation,
   customerBankDetails: new CustomerBankDetails,
   customerledger: [
     {
       ledgerId: 0,
       ledgerCreatedDate: '',
       totalLoanAmount: 0,
       payableAmountwithInterest: 0,
       tenure: 0,
       monthlyEMI: 0,
       amountPaidtillDate: 0,
       remainingAmount: 0,
       nextEmiDatestart: '',
       nextEmiDateEnd: '',
       defaulterCount: 0,
       previousEmitStatus: '',
       currentMonthEmiStatus: '',
       loanEndDate: '',
       loanStatus: ''
     }
   ],
   customerSanctionLetter: new SanctionLetter,
   customerloanAmountRequired: 0
 }

 

 customerAllDocuments:AllDocuments={
   documentID: 0,
   addressProof: undefined,
   panCard: undefined,
   incomeProof: undefined,
   addharCard: undefined,
   photo: undefined,
   signature: undefined,
   thumb: undefined,
   bankPassbook: undefined,
   drivingLicense: undefined
 }
 
  
  constructor(private http:HttpClient) { }

  enquiryFormSubmit(enquiryDetails:Enquiry)
  {
      alert("successfully submitted")
      return this.http.post("http://localhost:9090/enquiry/insert",enquiryDetails)
  }


  getdata() {
    
    return this.http.get("http://localhost:9090/enquiry/getAllEnquiries")
  }

  getsingledata() {
    return this.http.get("http://localhost:9090/enquiry/getEligibleEnquiries")
  }

  customerLoanFormSubmit(data:any){
    alert('hi')
    return this.http.post("http://localhost:9090/customer/FillLoanApplicationForm",data)
  }

  getcustomerdata(){
    return this.http.get("http://localhost:9090/customer/getAllCustomerFormData")

  }
  getcustomersibgledata(customerid: number) {
    return this.http.get("http://localhost:9090/customer/getSingleDataByCustomerId/"+ customerid)
  }
  url:string
  customerdocumentverificationstatus(customerid: number, customerStatus:string){
    alert(customerid)
    this.url="http://localhost:9090/customer/customerApplicationStatus/"+customerid+"/"+customerStatus
    alert(this.url)

    return this.http.put(this.url,null)
  }

  getDocVerifiedCustomer()
  {
    return this.http.get("http://localhost:9090/customer/getAllDocVerifiedCustomer");
  }

  getDocRjectedCustomer()
  {
    return this.http.get("http://localhost:9090/customer/getAllDocRejectedCustomer");
  }

  customerSanctionLetterSave(customer:CustomerDetails){
    return this.http.put("http://localhost:9090/sanctionletter/generateSanctionLetterByCustomer/",customer)
  }
  getCustomerDocumentsVerifiedData(){
    return this.http.get("http://localhost:9090/customer/getAllDocVerifiedCustomer")
  }

  getAllGeneratedSanctionByCm()
  {
    return this.http.get("http://localhost:9090/sanctionletter/getAllGenratedSanctionByCm")
  }


  CustomerSanctionApproveddData(customerid: number, customerStatus:string)
  {
    alert(customerid);
    return this.http.put("http://localhost:9090/sanctionletter/customerApplicationStatusSanctioned/"+customerid+"/"+customerStatus,null)
  }

  getAllSAnctionApprovedDataByAh()
  {
    return this.http.get("http://localhost:9090/sanctionletter/getAllSanctionLetterApprovedCustomers")
  }

  getAllSanctionLetterSignByCustomer()
  {
    return this.http.get("http://localhost:9090/sanctionletter/getAllSanctionLetterSignByCustomer")
  }

  loanDisbursment(customerid:number){
    alert("service");
    alert(customerid)
  
    return this.http.post("http://localhost:9090/loandisbursement/loandisbursementbyAH/"+customerid,null)
  }

  getCustomerLogin(customerid:any,customermobile:any){

     return this.http.get("http://localhost:9090/customer/getAllLoanDisbursedData/"+customerid+"/"+customermobile)
  }
}
