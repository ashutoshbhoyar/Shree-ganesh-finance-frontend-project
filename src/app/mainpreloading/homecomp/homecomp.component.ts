import { Component } from '@angular/core';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.scss']
})
export class HomecompComponent 
{
  images = [
    {path: '/assets/picture/car2.jpg/'},
    {path: '/assets/picture/car1.jpg/'},
    {path: '/assets/picture/car3.jpg/'},
    {path: '/assets/picture/car4.jpg/'},
  ]
  
}
