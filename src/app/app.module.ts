import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './main/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryNamePipe } from './pipes/category-name.pipe';
import { FilterArrayByKeyPipe } from './pipes/filter-array-by-key.pipe';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BirthDatePipe } from './pipes/birth-date.pipe';
import { ProductCardDirective } from './directives/product-card.directive';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing-module';
import { AboutUsComponent } from './about-us/about-us.component';
import { TodocreateComponent } from './todo-create/todo-create.component';
import { TodoShowComponent } from './todo-show/todo-show.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductComponent,
    CategoryNamePipe,
    FilterArrayByKeyPipe,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    BirthDatePipe,
    ProductCardDirective,
    CardComponent,
    AboutUsComponent,
    TodocreateComponent,
    TodoShowComponent,
    TodoUpdateComponent,
    LoaderComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






