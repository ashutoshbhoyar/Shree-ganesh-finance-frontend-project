import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { Enquiry } from 'src/app/models/enquiry';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-cibilcheck',
  templateUrl: './cibilcheck.component.html',
  styleUrls: ['./cibilcheck.component.scss']
})
export class CibilcheckComponent {

  constructor(private cs:CommonserviceService){}

sdata:Enquiry[];
@ViewChild(MatPaginator) paginator : MatPaginator;
@ViewChild(MatSort) sort : MatSort; 
searchText:string;
dataSource :any;
responce:any=[];
ngOnInit():void
{
  this.cs.getdata().subscribe((data:Enquiry[])=>{
    this.sdata=data;

    this.dataSource= new MatTableDataSource<Enquiry>(this.sdata);
    this.dataSource.paginator=this.paginator; 
    this.dataSource.sort=this.sort;
    
  })
}

displayedColumns: string[] = ['EnquiryId', 'EnquiryName','EnquiryMobileNumber', 'EnquiryMail','Enquirystatus' ];

 

  // Filterchange(){
  //   this.dataSource.filter=this.searchText.trim().toLowerCase();
   
    
  //    }
     Filterchange($event:any){
      this.dataSource.filter = $event.target.value;
      
       }

       onChange($event:any){

        let filterdata =this.dataSource.filter(this.responce,(item)=>{
          return item.enquiryStatus.toLowerCase()==$event.value.toLowerCase();
         
        })
        alert(filterdata)
        this.dataSource=new MatTableDataSource(filterdata);
         
       }
}
