import {Component} from "@angular/core"
import { DiscountOffers } from "src/app/shared classes and types/enum_discount"
import { ICategory } from "src/app/shared classes and types/icategory"
import { IProduct } from "src/app/shared classes and types/iproduct"
import categories from "src/static/categories"
import products from "../../../static/products"

@Component({
  selector: "app-product",
  templateUrl:"./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  discount: DiscountOffers = DiscountOffers.fifteen
  storeName: string = ""
  storeLogo: string = "../../../assets/amazon.png"
  productList: IProduct[] = products
  categoryList: ICategory[] = categories
  clientName: string = ""
  isPurshased: boolean
  discountOffers= DiscountOffers
  isTableShown: boolean = true

  //

  selectedCategoryId : number = 0 ;
  constructor(){
    this.isPurshased = false
  }

  hideTable(){
    console.log("{sss")
    this.isTableShown = !this.isTableShown;
  }
  setCategoryId(name :number){
    this.selectedCategoryId = name
  }
}

