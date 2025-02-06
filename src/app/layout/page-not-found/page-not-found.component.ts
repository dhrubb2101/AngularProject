import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import data from '../../shared/staticData/data';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  PagenotFound:string=data.PagenotFound

}
