import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-angular-pipe',
  imports: [CommonModule],
  templateUrl: './angular-pipe.component.html',
  styleUrl: './angular-pipe.component.css'
})
export class AngularPipeComponent {
  msg:string="Good Morning my dear friends,how are you all";

}
