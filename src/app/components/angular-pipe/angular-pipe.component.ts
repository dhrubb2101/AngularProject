import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycubeCustomPipePipe } from '../../shared/customPipe/mycube-custom-pipe.pipe';
import { MySquareCusomPipePipe } from '../../shared/customPipe/my-square-cusom-pipe.pipe';
import { AreaOfCircleCusomPipePipe } from '../../shared/customPipe/area-of-circle-cusom-pipe.pipe';
import { MyGenderCustomPipePipe } from '../../shared/customPipe/my-gender-custom-pipe.pipe';

@Component({
  selector: 'app-angular-pipe',
  imports: [CommonModule,MycubeCustomPipePipe,MySquareCusomPipePipe,AreaOfCircleCusomPipePipe,MyGenderCustomPipePipe],
  templateUrl: './angular-pipe.component.html',
  styleUrl: './angular-pipe.component.css'
})
export class AngularPipeComponent {
  msg:string="Good Morning my dear friends,how are you all";
  employee:any={
  id:101, name:"Rajesh",post:"CEO",address:"Hyderabad"}
  dobj=new Date();

  //creating an array of object type of data 
  friends:any=[
    {name:"Anmol",gender:"male",address:"Pune"},
    {name:"Kasturi",gender:"female",address:"Nagpur"},
    {name:"Vishal",gender:"male",address:"Mumbai"},
    {name:"Kalyani",gender:"Female",address:"Mumbai"},
  ]
}
