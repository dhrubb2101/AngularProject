import { Component } from '@angular/core';
import data from '../../shared/staticData/data';

@Component({
  selector: 'app-toggleimg',
  imports: [],
  templateUrl: './toggleimg.component.html',
  styleUrl: './toggleimg.component.css'
})
export class ToggleimgComponent {

  imgPath1:string= data.dosa
  // imgPath1:string="Assets/samosa image.jpeg";
  imgName1:string="SamosaGreat";
  isCond:boolean = false;


  toggleimg(){
    this.isCond = !this.isCond
    if(this.isCond){
      // this.imgPath1 = "Assets/jalebi.jpg";
      this.imgPath1 = data.jalebi  // it is in (object,key) format
      this.imgName1 = "Jalebi";
    }else{
      // this.imgPath1="Assets/samosa image.jpeg";
      this.imgPath1=data.samosaimage;
      this.imgName1="SamosaGreat";

    }
    
  }

}
