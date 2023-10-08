import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgotPassService } from '../shared/services/forgot-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
email:string='';
userMsg:string=''


constructor(private _forgotPassService:ForgotPassService, private _router :Router){}


forgotForm:FormGroup = new FormGroup({
  email:new FormControl('')
})

resetCodeForm:FormGroup = new FormGroup({
  resetCode:new FormControl('')
})

resetPasswordForm:FormGroup = new FormGroup({
  newPassword:new FormControl('')
})





forgotPassword(){
  let userEmail=this.forgotForm.value;
  this.email=userEmail.email
this._forgotPassService.forgotPassword(userEmail).subscribe({
next:(res)=>{
  console.log(res);
  this.userMsg=res.message;
  this.step1=false;
  this.step2=true
},
error:(err)=>{
  console.log(err);
  this.userMsg=err.error.message
  
}
})
}

resetCode(){
  let resetCode=this.resetCodeForm.value;
this._forgotPassService.resetCode(resetCode).subscribe({
  next:(res)=>{
    console.log(res);
    this.userMsg=res.status;
    this.step2=false;
    this.step3=true;
  },
  error:(err)=>{
    this.userMsg=err.error.message
  }
})
}

setNewPassword(){
  let resetPassForm=this.resetPasswordForm.value;
  resetPassForm.email=this.email
this._forgotPassService.resetPassword(resetPassForm).subscribe({
  next:(res)=>{
    console.log(res);
    if(res.token){
localStorage.setItem('userToken',res.token);
this._router.navigate(['/login'])
    }
    
  },error:(err)=>{
    this.userMsg=err.error.message
  }
})
}


}
