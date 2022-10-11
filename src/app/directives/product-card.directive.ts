import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartItem } from '../model/cartItem';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective {
  @Input('ProductCard') borderRadius : string = "15px";
  @Input('ProductCard') boxShadow : string = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";



  constructor(private elm:ElementRef) {
    }
    ngOnChanges(changes: SimpleChanges): void {
      this.elm.nativeElement.style = `solid 2px ${this.borderRadius}`
    }
    @HostListener("mouseover") hover(){
      this.elm.nativeElement.style.border = `solid 2px ${this.borderRadius}`
      this.elm.nativeElement.style.boxShadow = `solid 2px ${this.boxShadow}`

   }


}
