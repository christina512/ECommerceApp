import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces/product';
import { CartService } from '../shared/services/cart.service';
import { WishListService } from '../shared/services/wish-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  wishListData :string[]=[]
@Input()product :Product ={}as Product

ngOnInit(): void {
  this._wishListService.getWishList().subscribe({
    next:(res)=>{
      const newData =res.data.map((item:any)=>item.id)

      // console.log("newData",newData);
      this.wishListData=newData
      
    }
  })
}

constructor(private _cartService:CartService, private _wishListService :WishListService, private _toastrService:ToastrService){}

addToCart(id:string | undefined){
this._cartService.addProductToCart(id).subscribe({
  next:(res)=>{
    this._cartService.numOfCartItems.next(res.numOfCartItems)
    this._toastrService.success(res.message)
  }
})
}


addToWishList(id:string | undefined){
  this._wishListService.addToWishList(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.wishListData=res.data
      this._toastrService.success(res.message)
      
    }
  })
}

deleteItem(id:string |undefined){
  this._wishListService.deleteItem(id).subscribe({
  next:(res)=>{
    console.log(res);
    this.wishListData=res.data
    this._toastrService.error(res.message)
  }
  })
    }
}
