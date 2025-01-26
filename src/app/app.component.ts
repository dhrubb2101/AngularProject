import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ToggleimgComponent } from './Task/toggleimg/toggleimg.component';
import { AngularPipeComponent } from './components/angular-pipe/angular-pipe.component';
import { TaskOneComponent } from './components/task-one/task-one.component';
import { TaskThreeComponent } from './components/task-three/task-three.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AngFormComponent } from './angularForm/ang-form/ang-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ToggleimgComponent,AngularPipeComponent,TaskOneComponent,TaskThreeComponent,ParentComponentComponent,PageNotFoundComponent,RouterModule,AngFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'OpteamixAngularProject';
}

