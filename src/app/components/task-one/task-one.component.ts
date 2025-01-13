import { Component } from '@angular/core';

@Component({
  selector: 'app-task-one',
  imports: [],
  templateUrl: './task-one.component.html',
  styleUrl: './task-one.component.css'
})
export class TaskOneComponent {
 CelebrityName:string="Shahrukh Khan";
 CelebrityImage:string="Assets/Shahrukh.jpg";
 isCond:boolean = false;

 toggleCelebrity(imgName:string , imgPath:string){
   this.CelebrityImage = imgPath;
    this.CelebrityName = imgName;
 }
}
