import {Component ,OnInit} from "@angular/core"
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DiscountOffers } from "src/app/model/enum_discount"
import { ICategory } from "src/app/model/icategory"
import { IProduct } from "src/app/model/iproduct"
import categories from "src/static/categories.service"

@Component({
  selector: "app-product",
  templateUrl:"./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  discount: DiscountOffers = DiscountOffers.fifteen
  storeName: string = ""
  storeLogo: string = "../../../assets/amazon.png"
  products: IProduct[] =  []
  categoryList: ICategory[] = categories
  clientName: string = ""
  isPurshased: boolean
  discountOffers= DiscountOffers
  isTableShown: boolean = true
  addProduct: FormGroup;
  date=Date.now();


  //

  selectedCategoryId : number = 0 ;
  constructor(){
    this.isPurshased = false
    this.products=[{
      "id": 100,
      "name": "product 1",
    "qty": 0,
      "price": 100,
    "img": "../../../assets/mob.png",
      "categoryId": 1
    },
    {
      "id": 200,
      "name": "product 2",
      "qty": 5,
      "price": 100,
      "img": "../../../assets/mob.png",
      "categoryId": 2
    },
    {
      "id": 100,
      "name": "product 3",
      "qty": 10,
      "price": 100,
      "img": "../../../assets/mob.png",
      "categoryId": 3
    },
    {
      "id": 100,
      "name": "product 4",
      "qty": 2,
      "price": 100,
      "img": "../../../assets/mob.png",
      "categoryId": 3
    },
    {
      "id": 100,
      "name": "product 5",
      "qty": 4,
      "price": 100,
      "img": "../../../assets/mob.png",
      "categoryId": 4
    },
    {
      "id": 100,
      "name": "product 6",
      "qty": 0,
      "price": 100,
      "img": "../../../assets/mob.png",
      "categoryId": 4
    }]
    this.addProduct = new FormGroup({
      name: new FormControl("",[Validators.required]),
      quantity:new FormControl(1,[Validators.required,Validators.min(1)]),
      price:new FormControl(1,[Validators.required,Validators.min(1)]),
      img: new FormControl("", [Validators.required, Validators.pattern("^https?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      categoryId:new FormControl("",[Validators.required])
    });
  }

  hideTable(){
    console.log("{sss")
    this.isTableShown = !this.isTableShown;
  }
  setCategoryId(name :number){
    this.selectedCategoryId = name
  }

  AddProduct(){
    var newProduct: IProduct = {
      id: this.products.length + 1,
      name: this.addProduct.value["name"],
      price:this.addProduct.value["price"],
      qty:this.addProduct.value["quantity"],
      img:this.addProduct.value["img"],
      categoryId:this.addProduct.value["categoryId"],
    }
    this.products.push(newProduct);
  }
}

