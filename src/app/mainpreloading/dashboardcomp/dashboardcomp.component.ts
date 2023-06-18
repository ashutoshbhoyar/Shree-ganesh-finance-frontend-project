import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-dashboardcomp',
  templateUrl: './dashboardcomp.component.html',
  styleUrls: ['./dashboardcomp.component.scss']
})
export class DashboardcompComponent {

  constructor(private router:Router){}

userRole:any;
menus:any[];
header:any;
email:any;

ngOnInit()
{
  this.userRole=localStorage.getItem("role");
  this.menus=Menu.menus;
  if(this.userRole==="operationalexcecutive")
  {
    this.header="Operational Executive ";
    this.email="operationexe@gmail.com";
  }
  else if(this.userRole==="relationalexcecutive")
  {
    this.header="Relational Executive";
    this.email="relationalexe@gmail.com";
  }
  else if(this.userRole==="accounthead")
  {
    this.header="Account Head";
    this.email="accounthead@gmail.com";
  }
  else if(this.userRole==="creditmanager")
  {
    this.header="Credit Manager";
    this.email="creditmanager@gmail.com";
  }
  

}

logout()
{
 this.router.navigateByUrl("/login");
}


}
