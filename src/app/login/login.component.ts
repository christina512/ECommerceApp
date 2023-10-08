import { Component } from '@angular/core';
import {  FormGroup, FormControl,Validators} from "@angular/forms";
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean = false
  errorMessage:string = ""
logInForm:FormGroup = new FormGroup({
  email : new FormControl("", [Validators.required,Validators.email]),
  password : new FormControl("",[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)])
})
constructor(private _AuthService :AuthService , private _Router:Router){}

sendLogIn(form :FormGroup){
  console.log(form.value);
  this.isLoading=true

  this._AuthService.sendlogInToApi(form.value).subscribe({
    next:(res)=>{
      this.isLoading=false,
      localStorage.setItem('userToken', res.token);
      this._AuthService.getUserToken()
      this._Router.navigate(
      ["home"]);
    },
    error:(err)=>{console.log(err);
      if (err.error.errors===undefined) {
        this.errorMessage=err.error.message
      }else{
        this.errorMessage=err.error.errors.param+" "+err.error.errors.msg
      }
    }
  })

}
}
