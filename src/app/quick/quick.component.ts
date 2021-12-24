import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-quick',
  template: `
    <h3 style='background:beige; border-style:dotted;'>
      Quick Component - by Angular generators!
    </h3>
  `,
  styles: [
  ]
})
export class QuickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
