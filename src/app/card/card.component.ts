import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/iproduct';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  cards: IProduct [] = [
    {id:1, name: "product1", qty: 16, price: 100, img: "../../../assets/mob.png", categoryId:2},
    {id:2, name: "product2", qty: 52, price: 500, img: "../../../assets/mob.png", categoryId:2},
    {id:3, name: "product3", qty: 19, price: 650, img: "../../../assets/mob.png", categoryId:2},
    {id:4, name: "product4", qty: 27, price: 430, img: "../../../assets/mob.png" ,categoryId:2},
  ]


  ngOnInit(): void {
  }

}
