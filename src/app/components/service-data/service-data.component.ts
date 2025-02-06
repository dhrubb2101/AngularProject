import { Component, inject } from '@angular/core';
import { MyserviceService } from '../../shared/services/myservice.service';
@Component({
  selector: 'app-service-data',
  imports: [],
  templateUrl: './service-data.component.html',
  styleUrl: './service-data.component.css'
})
export class ServiceDataComponent {

  servData = inject(MyserviceService); // dependency injection //if there is a reusuable code  for the service, or creating a service Class instance in component to access it's data in called dependency injection.
  add= this.servData.addition(100,300);
  sub= this.servData.subtract(500,300);
  mul= this.servData.multiplication(5,6);
  div= this.servData.division(500,20);

}
