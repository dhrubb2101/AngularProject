import { Component, Inject } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

userid:string='';
userpass:string='';
userData= Inject(DbserviceService);

serverUserData:any;

constructor(private _router:Router){}

signIn(){
  // console.log(this.userid,this.userpass);
  this.userData.getRecord("users").subscribe((res:any)=>{
    // console.log(res);
    this.serverUserData =res;
    let data = this.serverUserData.filter((val:any)=>{return val.uid===this.userid && val.pass===this.userpass});
    if(data.length >0){
      sessionStorage.setItem("user",this.userid);
      this._router.navigate(['/maindashboard']);
    }else{
      window.alert("wrong credential");
      this.userid="";
      this.userpass="";
    }
  })
}

}
