import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
import { CartItem } from 'src/app/model/cartItem';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList:IProduct[];
  constructor() {
    this.productList=[
      {
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
      }
    ]

   }

   getProducts() :IProduct[]{
    return this.productList;
   }

   filterByCategoryId(id:number) :IProduct[]{
    if(id==0) return this.getProducts();
    return this.productList.filter(product => product.categoryId == id);
   }

   addToCart(cartItem:CartItem){
    this.productList.forEach(
      item=>
        {
          if(item.id == cartItem.id){
            item.qty -= cartItem.quantity;
        }
      }
      )
   }
}



