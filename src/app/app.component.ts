import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ToggleimgComponent } from './Task/toggleimg/toggleimg.component';
import { AngularPipeComponent } from './components/angular-pipe/angular-pipe.component';
import { TaskOneComponent } from './components/task-one/task-one.component';
import { TaskThreeComponent } from './components/task-three/task-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ToggleimgComponent,AngularPipeComponent,TaskOneComponent,TaskThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'OpteamixAngularProject';
}

