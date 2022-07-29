import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template:`
  <div>
   {{ value }}
</div>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent   {

  
  @Input() value: 'x'|'y'


}
