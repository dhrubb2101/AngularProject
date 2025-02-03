import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

constructor(private _router:Router){}


  signOut(){
    if(window.confirm("Are you sure to signout")){
      sessionStorage.clear();
      this._router.navigate(["/"]);
    }
  }
}
