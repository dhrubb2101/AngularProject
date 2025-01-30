import { Component, inject } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

  productData = inject(DbserviceService);

    id:any;
    // pname:any;
    // pcompany:any;
    // pprice:any;
    // address:any;

    productArray:any;
  
    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {}

    ngOnInit(){
      this._activatedRoute.paramMap.subscribe((para)=>{
      this.id= para.get("id");
      //console.log(this.id);
      this.productData.getSingleRecord("products",this.id).subscribe((res)=>{
        //console.log(res);
        this.productArray= {...res};
      
        })
      })
    }
  
    sendData(data:any){
  
      //console.log(data);
      this.productData.updateRecord("products", this.id, data).subscribe(()=>{
        window.alert("Product Updated Successfully");
        this._router.navigate(["/maindashboard/productDash"])
      })
  }

}
