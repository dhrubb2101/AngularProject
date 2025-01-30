import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  productData = inject(DbserviceService);

  pname:any;
  pcompany:any;
  pprice:any;
  address:any;

  constructor(private _router:Router){}

  sendData(data:any){

    console.log(data);
    this.productData.addRecord("products",data).subscribe(()=>{
      window.alert("Product Added Successfully");
      this._router.navigate(["/maindashboard/productDash"])
    })
}
}