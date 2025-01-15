import { Component } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
@Component({
  selector: 'app-parent-component',
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {

  pdata:string=""
  childData:any
  getData(val:any){
    //window.alert(val);
    this.pdata = val;
  }
}
