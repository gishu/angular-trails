import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mx-my-uber",
  templateUrl: "./my-uber.component.html",
  styles: [],
})
export class MyUberComponent implements OnInit {
  items: number[] = [];
  value: number = 42;

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.items.push(0);
  }

  removeItem() {
    this.items.pop();
  }
  updateValue() {
    this.value++;
    console.log("Updated to " + this.value);
  }
}
