import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
 
  showForm : boolean =true;

  message : string = "hello";

  constructor(private _ele: ElementRef){

  }

  ngOnInit(){
    console.log(this.message);
  }

  ngAfterViewInit(){
    console.log("afterviewinit")
  }

  getMessage(value){
    this._ele.nativeElement.innerText=value;
  }

}
