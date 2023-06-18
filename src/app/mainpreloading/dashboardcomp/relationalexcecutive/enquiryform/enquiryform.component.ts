import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { Enquiry } from 'src/app/models/enquiry';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.scss']
})
export class EnquiryformComponent {
  constructor(private _formBuilder: FormBuilder, private cs: CommonserviceService) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  enquiryForm : FormGroup;

  ngOnInit(): void {
    
    this.enquiryForm=this._formBuilder.group({

      enquiryId: [0],
      enquiryFirstName : '',
      enquiryMiddleName : '',
      enquiryLastName : '',
      enquiryMobileNumber : [],
      enquiryPanCard : '',
      enquiryAdhaarCard : '',
      enquiryAddress : '',
      enquiryDateOfBirth : '',
      enquiryEmail : '',
      enquiryGender : '',
      enquiryCibilScore : [],
      enquiryStatus:''

    })

  }

  enquiryDetails : Enquiry={
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

  enquirySubmit()
    {
      alert("fillEnquiryform")
      this.enquiryDetails.enquiryId=this.enquiryForm.controls['enquiryId'].value;
      this.enquiryDetails.enquiryFirstName=this.enquiryForm.controls['enquiryFirstName'].value;
      this.enquiryDetails.enquiryMiddleName=this.enquiryForm.controls['enquiryMiddleName'].value;
      this.enquiryDetails.enquiryLastName=this.enquiryForm.controls['enquiryLastName'].value;
      this.enquiryDetails.enquiryMobileNumber=this.enquiryForm.controls['enquiryMobileNumber'].value;
      this.enquiryDetails.enquiryPanCard=this.enquiryForm.controls['enquiryPanCard'].value;
      this.enquiryDetails.enquiryAdhaarCard=this.enquiryForm.controls['enquiryAdhaarCard'].value;
      this.enquiryDetails.enquiryAddress=this.enquiryForm.controls['enquiryAddress'].value;
      this.enquiryDetails.enquiryDateOfBirth=this.enquiryForm.controls['enquiryDateOfBirth'].value;
      this.enquiryDetails.enquiryEmail=this.enquiryForm.controls['enquiryEmail'].value;
      this.enquiryDetails.enquiryGender=this.enquiryForm.controls['enquiryGender'].value;
      this.enquiryDetails.enquiryCibilScore=this.enquiryForm.controls['enquiryCibilScore'].value;
      this.enquiryDetails.enquiryStatus=this.enquiryForm.controls['enquiryStatus'].value;

      this.cs.enquiryFormSubmit(this.enquiryDetails).subscribe();
    }



}
