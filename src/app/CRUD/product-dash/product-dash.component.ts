import { Component, inject ,TemplateRef } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import data from '../../shared/staticData/data';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-product-dash',
  imports: [CommonModule,RouterLink,CarouselModule,NgxPaginationModule],
  templateUrl: './product-dash.component.html',
  styleUrl: './product-dash.component.css'
})
export class ProductDashComponent {

  img1:string = data.idli;
  img2:string = data.dosa;
  img3:string = data.jalebi;

  p: number = 1;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}


  productArray:any;
  productData = inject(DbserviceService);
  product: any;
  ind: any;

  

  ngOnInit(){
    this.fetchData();
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
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
