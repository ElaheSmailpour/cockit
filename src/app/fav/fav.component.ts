import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  @Input("parent") public name:any;
  @Output() public childData=new EventEmitter();

   callEvent(){
this.childData.emit("hi childData")
  }
  constructor() { }
 

  ngOnInit(): void {
  }

}
