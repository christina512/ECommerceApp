import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _httpClient:HttpClient) { }


  addToWishList(id:string |undefined):Observable<any>{
return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
  productId: id
}
)
  }


  getWishList():Observable<any>{
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')
      }


      deleteItem(id:string |undefined):Observable<any>{
        return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`
        )
          }
}
