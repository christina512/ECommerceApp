import { Component, OnInit } from '@angular/core';
import { WishListService } from '../shared/services/wish-list.service';
import { Product } from '../shared/interfaces/product';
import { CartService } from '../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{
constructor(private _wishListService :WishListService , private _cartService:CartService , private _toastrService:ToastrService){}
products:Product[]=[]
  ngOnInit(): void {
    this.addWishList()
  }


  addWishList(){
    this._wishListService.getWishList().subscribe({
      next:(res)=>{
        console.log(res);
        this.products=res.data
        console.log(this.products);
        
        
      }
    })
  }

  deleteItem(id:string |undefined){
this._wishListService.deleteItem(id).subscribe({
next:(res)=>{
  console.log(res);
  this._toastrService.error(res.message)
  this.addWishList()
}
})
  }


  addToCart(id: string |undefined){
this._cartService.addProductToCart(id).subscribe({
  next:(res)=>{
    console.log(res);
    this._toastrService.success(res.message)
    
  }
})
  }
}
