import { Routes } from '@angular/router';
import { MySquareCusomPipePipe } from './shared/customPipe/my-square-cusom-pipe.pipe';
import { DirectiveComponent } from './components/directive/directive.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AngFormComponent } from './angularForm/ang-form/ang-form.component';
import { UdtdfComponent } from './angularForm/udtdf/udtdf.component';
import { RtfComponent } from './angularForm/rtf/rtf.component';

export const routes: Routes = [
    // 1. Default Routing
    { path: "", component: DirectiveComponent },

    // 2. Named Routing
    { path: "directive", component: DirectiveComponent },

    // 3. Redirect routing
    { path: "pipes", redirectTo: "mypipe", pathMatch: "full" },
    { path: "mypipe", component: MySquareCusomPipePipe },

    // 4. Parameterized Routing
    // { path: "parent-component/:id", component: ParentComponentComponent },

    // 5. Child Routing
    { path: "ang-form", component: AngFormComponent, children: [
        { path: "udtdf", component: UdtdfComponent },
        { path: "rtf", component: RtfComponent }
    ]},

    // 6. Wildcard Routing
    { path: "ang-form", component: AngFormComponent },
    { path: "**", component: PageNotFoundComponent },  // Wildcard Route
];
