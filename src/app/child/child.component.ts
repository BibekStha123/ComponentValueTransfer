import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ["message"]
})
export class ChildComponent implements OnInit {

  message: String;

  @Output() showMessage = new EventEmitter();

  printMessage(){
    //console.log(this.message);
    this.showMessage.emit("hey,,,");
  }

  constructor() { }

  ngOnInit() {
    //console.log(this.message);
  }

}
