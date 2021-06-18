import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cockpit';
  name="eli";
  message="";
  flag:boolean=false;
  

  show():void{
    this.flag=!this.flag;
    }
}
