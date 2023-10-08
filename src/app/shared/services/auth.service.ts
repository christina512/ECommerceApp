import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: BehaviorSubject<any> = new BehaviorSubject('')
  constructor(private _httpClient: HttpClient , private _Router :Router) {
    if (localStorage.getItem('userToken')) {
      this.getUserToken()
    }
  }

  getUserToken() {
    let incodedToken = JSON.stringify(localStorage.getItem('userToken'))
    let encoded = jwtDecode(incodedToken)
    console.log(encoded);
    this.userData.next(encoded)

  }


  sendRegToApi(formValue: any): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formValue)
  }

  sendlogInToApi(formValue: any): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValue)
  }


  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login'])

  }



}
