import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItem: Product[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data: Product[]) => {
      this.cartItem = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cartItem) {
      total += item.price;
    }
    return total;
  }

  clearCart():void{
    this.cartService.deleteItem().subscribe();
  }

  checkout():void{
   this.cartService.checkout(this.cartItem).subscribe();
  }
}
