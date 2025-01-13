import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  imgPath:string="https://cdn.pixabay.com/photo/2024/01/29/21/50/ai-generated-8540840_640.jpgs";
  imgName:string="Samosa Great one";
  myName:string="Panchasil Wankhade"; //so in this proerty we store a value
  myInputType:string="checkbox";
  breakfast:string ="Samosa";

  greeting(val:string){
    window.alert(`Hello ${val}!`)
  }
}
