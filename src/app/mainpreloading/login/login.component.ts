import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { CustomerDetails } from 'src/app/models/customer-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private fb:FormBuilder,private cs:CommonserviceService,private router:Router){}

login:FormGroup
customerid:any
customermobileno:any
ngOnInit()
  {
    this.login=this.fb.group({
      username:[],
      password:[]
    })

  }

  loginMethod()
  {
      alert("login proccess started");
      if(this.login.get("username").value==="oe" && this.login.get("password").value==="oe")
      {
          alert("Login successfull for Operational Executive");
          localStorage.setItem("role","operationalexcecutive");
          this.router.navigateByUrl("/dashboard/operationalexcecutive");
         
          
      }
       else if(this.login.get("username").value==="re" && this.login.get("password").value==="re")
      {
          alert("Login successfull for Relational Executive");
          localStorage.setItem("role","relationalexcecutive");
          this.router.navigateByUrl("/dashboard/relationalexcecutive");
      }
      else if(this.login.get("username").value==="ah" && this.login.get("password").value==="ah")
      {
          alert("Login successfull for Account Head");
          localStorage.setItem("role","accounthead");
          this.router.navigateByUrl("/dashboard/accounthead");
      }
      else if(this.login.get("username").value==="cm" && this.login.get("password").value==="cm")
      {
          alert("Login successfull for Credit Manager");
          localStorage.setItem("role","creditmanager");
          this.router.navigateByUrl("/dashboard/creditmanager");
      }
    
        else{
  
  
                   this.customerid=this.login.get("username").value;
                   this.customermobileno=this.login.get("password").value;
                   

                   this.cs.getCustomerLogin(this.customerid,this.customermobileno).subscribe((element:CustomerDetails)=>{
                    
                    
          
                             alert("Login successfull for Customer");
                              localStorage.setItem("role","customer");
                                this.router.navigate(['./dashboard/customer/customercomp'],
                                {queryParams:{data:JSON.stringify(element)}}); 

                                
               
                    
                   });
                  }
                }
              }
                  
                   

                   
     




 