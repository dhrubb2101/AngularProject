import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main-dash-board',
  imports: [RouterOutlet,NavComponent,FooterComponent],
  templateUrl: './main-dash-board.component.html',
  styleUrl: './main-dash-board.component.css'
})
export class MainDashBoardComponent {

}
