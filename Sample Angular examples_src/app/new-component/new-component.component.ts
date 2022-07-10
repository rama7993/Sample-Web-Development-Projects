import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }
  colour:string="green"
  choice:Boolean=false
  names:String[]=new Array("rama","shyam","singh","roy","koti")
  amount:number=300
  choosen:string=""
  ngOnInit(): void {
  }

  setcolor(clr:string){
    this.colour=clr
  }
  toggle(){
    this.choice= this.choice ? false:true
  }
  Increment(){
    this.amount+=500
  }
  Decrement(){
    this.amount-=1000
  }
  func(event:any){
   this.choosen=event.target.value
  }
}
