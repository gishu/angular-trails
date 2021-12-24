import {Component} from '@angular/core';

@Component({
    selector: 'mx-hand-rolled',
    template: `<h3>Yay! A hand rolled component</h3> 
    <p class='highlight'>i.e. Not using angular generators</p>`,
    styles: ['.highlight {color: blue;}']
})
export class HandRolledComponent{

}