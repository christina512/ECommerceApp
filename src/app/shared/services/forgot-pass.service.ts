import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassService {

  constructor(private _httpClient:HttpClient) { }



  forgotPassword(userEmail:object):Observable<any>{
   return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',userEmail)
  }

  resetCode(resetCode:object):Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',resetCode)
   }

   resetPassword(resetPass:object):Observable<any>{
    return this._httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',resetPass)
   }
}
