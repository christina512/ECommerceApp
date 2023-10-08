import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0)


  constructor(private _httpClient: HttpClient) {
    this.getCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.numOfCartItems.next(res.numOfCartItems)
        
      }
    })
   }

  addProductToCart(id: string |undefined): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart', {
      productId: id
    })
  }

  getCart(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
  }


  updateProductCount(count: number, id: string |undefined): Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      count: `${count}`
    })
  }


  removeProduct(id: string | undefined): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }


  generatePayment(cartId: string , shippingAddress:any): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      shippingAddress:shippingAddress
    })
  }
}
