import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numOfCartItems:number=0


  isLoggedIn:boolean=false

  constructor(private _authServise:AuthService, private _CartService:CartService){
this._authServise.userData.subscribe((res)=>{
  console.log(res);
  if (this._authServise.userData.getValue()) {
    this.isLoggedIn=true
  }else{
    this.isLoggedIn=false
  }
  
})

this._CartService.numOfCartItems.subscribe(res =>{
  this.numOfCartItems=res
})
  }


  logOut(){
    this._authServise.logOut()
  }
}
