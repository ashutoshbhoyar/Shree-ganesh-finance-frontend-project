
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';





@Component({
  selector: 'app-verifydetails',
  templateUrl: './verifydetails.component.html',
  styleUrls: ['./verifydetails.component.scss']
})
export class VerifydetailsComponent  {
  
  
  displayedColumns: string[] = ['customerId', 'customerFirstName', 'customerLastName','customerMobileNumber', 'action' ]; // if we changed only name position here then 
  //column  will automatically changed. 
  dataSource :any
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort; 
   
searchText:string;
  constructor(private _formBuilder: FormBuilder, private cs:CommonserviceService,private route:Router) {}
  
     
    
  customerdata: CustomerDetails[];
    ngOnInit():void
    {
      this.cs.getCustomerDocumentsVerifiedData().subscribe((data:CustomerDetails[])=>{
        this.customerdata=data

        this.dataSource= new MatTableDataSource<CustomerDetails>(this.customerdata);
        this.dataSource.paginator=this.paginator; 
        this.dataSource.sort=this.sort;
        
      })
    }

    
   

    singlecustomeralldata(info:CustomerDetails){

      this.route.navigate(['./dashboard/creditmanager/rateofinterest'], 
      {queryParams:{data:JSON.stringify(info)}});

    }
  
   


    // Filterchange($event:any){
    // this.dataSource.filter=$event.target.value;
    
    // }

    Filterchange(){
     this.dataSource.filter=this.searchText.trim().toLowerCase();
      
      
       }

  }
