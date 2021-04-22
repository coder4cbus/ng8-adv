import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PopupMenuComponent } from '../popup-menu/popup-menu.component';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product:Product

  @ViewChild(PopupMenuComponent, {static:false}) 
  menu:PopupMenuComponent
  
  constructor(private cartSvc: CartService)  { }

  ngOnInit() {
  }

  openMenu(e: MouseEvent) {
    this.menu.open(e)
  }

  share(target:string) {
    console.log("Sharing %s with: %s",
    this.product.name, target)
  }

  addtoCart() {
    this.cartSvc.addToCart({
      product: this.product,
      quantity: 1
    })
    return false;
  }

}
