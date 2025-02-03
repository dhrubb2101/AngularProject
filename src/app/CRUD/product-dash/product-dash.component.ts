import { Component, inject } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-dash',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-dash.component.html',
  styleUrl: './product-dash.component.css'
})
export class ProductDashComponent {

  productArray:any;
  productData = inject(DbserviceService);
  product: any;
  ind: any;

  

  ngOnInit(){
    this.fetchData();
  }



  fetchData(){
    this.productData.getRecord("products").subscribe((res)=>{
      //console.log(res);
      this.productArray=res
    })
  }

  deleteData(id:any){
    if(window.confirm(`Are you sure to delete record in which ID ${id} is mentioned`)){
      this.productData.deleteRecord("products",id).subscribe(()=>{
        window.alert("Record Deleted Successfully");
        this.fetchData();
          
        })

    }
    
  }

}
