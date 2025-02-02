import { Routes } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { AngularPipeComponent } from './components/angular-pipe/angular-pipe.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AngFormComponent } from './angularForm/ang-form/ang-form.component';
import { UdtdfComponent } from './angularForm/udtdf/udtdf.component';
import { RtfComponent } from './angularForm/rtf/rtf.component';
import { MainDashBoardComponent } from './layout/main-dash-board/main-dash-board.component';
import { LoginComponent } from './layout/login/login.component';
import { ServiceDataComponent } from './components/service-data/service-data.component';
import { ProductDashComponent } from './CRUD/product-dash/product-dash.component';
import { ProductAddComponent } from './CRUD/product-add/product-add.component';
import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';


export const routes: Routes = [

  {path: "maindashboard", component: MainDashBoardComponent , children: [
    //2.Default Routing
  //{ path: "", component: DirectiveComponent},
  //1.Naming Routing
  { path: "directive", component : DirectiveComponent},
  //3.Redirect routing
  { path: "", redirectTo: "login",pathMatch:"full"},
  { path: "mypipe", component : AngularPipeComponent},
  { path: "serviceData", component : ServiceDataComponent},
  { path: "productDash", component: ProductDashComponent},
  { path: "productAdd", component: ProductAddComponent},
  { path: "productEdit", component: ProductEditComponent },
  //4.Parameter Routing
  // { path:"parent/:id",component : ParentComponentComponent},
  {path:"parent",component : ParentComponentComponent},

  {path:"login",component : LoginComponent},

    //5.Child Routing
  {path: "angform",component : AngFormComponent , children: [
    // {path: "",component : UdtdfComponent},
    {path: "utdf",component : UdtdfComponent},
    {path: "rtf",component : RtfComponent},
  ]}, 
]},
  { path: "**",component: PageNotFoundComponent}
];







// import { MySquareCusomPipePipe } from './shared/customPipe/my-square-cusom-pipe.pipe';
// import { ParentComponentComponent } from './components/parent-component/parent-component.component';
// import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
// import { AngFormComponent } from './angularForm/ang-form/ang-form.component';
// import { UdtdfComponent } from './angularForm/udtdf/udtdf.component';
// import { RtfComponent } from './angularForm/rtf/rtf.component';
// import { MainDashBoardComponent } from './layout/main-dash-board/main-dash-board.component';
// import { LoginComponent } from './layout/login/login.component';
// import { Directive } from '@angular/core';
// import { ServiceDataComponent } from './components/service-data/service-data.component';
// import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';
// import { ProductDashComponent } from './CRUD/product-dash/product-dash.component';
// import { ProductAddComponent } from './CRUD/product-add/product-add.component';
// import { AngularPipeComponent } from './components/angular-pipe/angular-pipe.component';


// export const routes: Routes = [
//   // Main Dashboard Route with Children
//   { 
//     path: "main-dash-board", 
//     component: MainDashBoardComponent, 
//     children: [
//       { path: "", component: DirectiveComponent },  // Default route inside main dashboard
//       { path: "directive", component: DirectiveComponent },
//       {path:"serviceData",component:ServiceDataComponent},
//       {path:"productDash",component:ProductDashComponent},
//       {path:"productEdit/:id",component:ProductEditComponent},
//       //4.paramterized routing
//       {path:"productDash",component:ProductDashComponent},
//       {path:"productAdd",component:ProductAddComponent},
//       { path: "mypipe", component: MySquareCusomPipePipe },  // Replace with actual component
//       { path: "ang-form", component: AngFormComponent, children: [
//         { path: "udtdf", component: UdtdfComponent },
//         { path: "rtf", component: RtfComponent }
//       ]}
//     ]
//   },
//   // Default Route outside main dashboard
//   { path: "", component: LoginComponent },

//   // Redirect Route
//   { path: "pipes", redirectTo: "mypipe", pathMatch: "full" },

//   // Wildcard Route
//   { path: "**", component: PageNotFoundComponent },
// ];

