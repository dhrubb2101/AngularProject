import { Component ,EventEmitter,Input, output, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {

  childData : string ="";

  @Input() parentData:any

  @Output() eventObj = new EventEmitter();

  getData(val:any){
    // window.alert(val);
    this.childData = val;
    this.eventObj.emit(val);
  }
}
