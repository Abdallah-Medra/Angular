import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './main/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryNamePipe } from './pipes/category-name.pipe';
import { FilterArrayByKeyPipe } from './pipes/filter-array-by-key.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductComponent,
    CategoryNamePipe,
    FilterArrayByKeyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



