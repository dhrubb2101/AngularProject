import { Routes } from '@angular/router';
import { MySquareCusomPipePipe } from './shared/customPipe/my-square-cusom-pipe.pipe';
import { DirectiveComponent } from './components/directive/directive.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AngFormComponent } from './angularForm/ang-form/ang-form.component';
import { UdtdfComponent } from './angularForm/udtdf/udtdf.component';
import { RtfComponent } from './angularForm/rtf/rtf.component';
import { MainDashBoardComponent } from './layout/main-dash-board/main-dash-board.component';
import { LoginComponent } from './layout/login/login.component';
import { Directive } from '@angular/core';
import { ServiceDataComponent } from './components/service-data/service-data.component';
import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';
import { ProductDashComponent } from './CRUD/product-dash/product-dash.component';
import { ProductAddComponent } from './CRUD/product-add/product-add.component';
export const routes: Routes = [
    // Main Dashboard Route with Children
    { 
      path: "main-dash-board", 
      component: MainDashBoardComponent, 
      children: [
        { path: "", component: DirectiveComponent },  // Default route inside main dashboard
        { path: "directive", component: DirectiveComponent },
        {path:"serviceData",component:ServiceDataComponent},
        {path:"productDash",component:ProductDashComponent},
        {path:"productEdit",component:ProductEditComponent},
        {path:"productDash",component:ProductDashComponent},
        {path:"productAdd",component:ProductAddComponent},
        { path: "mypipe", component: MySquareCusomPipePipe },  // Replace with actual component
        { path: "ang-form", component: AngFormComponent, children: [
          { path: "udtdf", component: UdtdfComponent },
          { path: "rtf", component: RtfComponent }
        ]}
      ]
    },
    // Default Route outside main dashboard
    { path: "", component: LoginComponent },

    // Redirect Route
    { path: "pipes", redirectTo: "mypipe", pathMatch: "full" },

    // Wildcard Route
    { path: "**", component: PageNotFoundComponent },
];
