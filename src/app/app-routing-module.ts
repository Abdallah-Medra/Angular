import {  createComponent, NgModule} from "@angular/core";
import {  RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component"
import { ProductComponent } from "./main/product/product.component";
import { LoginComponent } from 'src/app/login/login.component';
import { AuthGuard } from 'src/app/auth.guard';


let routes:Routes=[

      {path :"",redirectTo:"/home",pathMatch:"full"},
      {path:"home",component:HomeComponent},
      {path:"product",component:ProductComponent,canActivate:[AuthGuard]},
]


@NgModule(
  {
      exports:[RouterModule],
      imports:[RouterModule.forRoot(routes)]
  }
)
export class AppRoutingModule{

}
