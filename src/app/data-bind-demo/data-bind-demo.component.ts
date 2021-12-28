import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-data-bind-demo',
  templateUrl: './data-bind-demo.component.html',
  styles: [
  ]
})
export class DataBindDemoComponent implements OnInit {


  answer : number = 42;

  constructor() { }

  ngOnInit(): void {
  }

  isDisabled(){
    return false;
  }

  onButtonClick(){
    alert("Event handler called!");
  }

}
