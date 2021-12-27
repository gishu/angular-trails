import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "mx-lifecycle-demo",
  template: ` <h3>Component</h3> 
  <ng-content></ng-content>`,
  styles: [],
})
export class LifecycleDemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input()
  MyInput: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges - when bound property changes. High Freq");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(
      "OnInit - component has been initialized with Input as " + this.MyInput
    );
  }

  ngDoCheck(): void {
    console.log("DoCheck - Angular change detection run! High Freq");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit() - external content projected into comp's placeholders");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked() - content has been checked for data updates");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit() - component's view and all child component views initialized");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked() - called after view (and all desc) change detection is done");
  }
  ngOnDestroy(): void {
    console.log("OnDestroy() - component instance terminated");
  }
}
