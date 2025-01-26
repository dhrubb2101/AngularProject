import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-udtdf',
  imports: [FormsModule,CommonModule],
  templateUrl: './udtdf.component.html',
  styleUrl: './udtdf.component.css'
})
export class UdtdfComponent {
  username:any;
  userpass:any;
  useremail:any;
  term:any;

  getData(value:any){
    console.log(value);
  }
}
