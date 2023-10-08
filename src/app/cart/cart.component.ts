import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from './interface/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartDetails: Cart ={}as Cart
constructor(private _cartService:CartService , private _toastrService:ToastrService){}

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
this._cartService?.getCart().subscribe({
  next:(res)=>{
    console.log(res);
    this.cartDetails=res
    console.log(this.cartDetails);
  }
})
  }

  updateProductCount(count:number,id:string | undefined){
this._cartService.updateProductCount(count,id).subscribe({
  next:(res)=>{
    console.log(res);
    this.cartDetails=res
  }
})
  }


  removeProduct(id:string | undefined){
this._cartService.removeProduct(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.cartDetails=res
    this._toastrService.error("removed from your cart")
  }
})
  }
}
