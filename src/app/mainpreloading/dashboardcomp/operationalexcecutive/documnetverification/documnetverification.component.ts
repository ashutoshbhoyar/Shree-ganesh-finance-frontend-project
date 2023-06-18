import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';


@Component({
  selector: 'app-documnetverification',
  templateUrl: './documnetverification.component.html',
  styleUrls: ['./documnetverification.component.scss']
})
export class DocumnetverificationComponent {

  constructor(private _formBuilder:FormBuilder, private cs:CommonserviceService,private route:Router,
    private ActivatedRoute:ActivatedRoute ){}

    
    customersingledata:CustomerDetails
  ngOnInit():void{

    this.ActivatedRoute.queryParams.subscribe((params)=>{
      console.log(params)
     this.customersingledata=JSON.parse(params['data']);
     console.log(this.customersingledata.customerId)
})
  }

  save(id:number, customerStatus:string){
   alert(customerStatus+id)
    
   this.cs.customerdocumentverificationstatus(id,customerStatus).subscribe();
   
  }



  

}
