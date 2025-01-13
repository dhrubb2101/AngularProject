import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  isCondA:boolean = true;
  hasValue:boolean = true;
  courses:string[]=["Html","CSS","Bootstrap","Javascript","Angular","React","Vue"];
  isCondB:boolean = true;
  selectedCourse:string = "Angular";

  myStyle = {
    fontSize:!this.isCondB ? '25px':'30px',
    color:!this.isCondB ?'red':'blue',
    backgroundColor:!this.isCondB ?'green':'aqua',
    textAlign:!this.isCondB ? 'center':'right',
    
  }

  myClass={
    'txtprimary':this.isCondB,
    'txtdanger':!this.isCondB,
    'special':this.isCondB
}
      //you can also apply css property dynamically
      // changeMyStyle(){
      //   this.isCondB = !this.isCondB;
      // }


}
