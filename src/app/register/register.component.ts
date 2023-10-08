import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading:boolean=false
  errorMessage:string = ""
registerForm:FormGroup = new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  rePassword:new FormControl('',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0-2]\d{1,8}$/)]),
})

constructor(private _AuthService:AuthService , private _Router:Router){}
sendRegister(form:FormGroup){
  console.log(form);
  this.isLoading= true
  this._AuthService.sendRegToApi(form.value).subscribe({
    next:(res)=>{this.isLoading=false,
      this._Router.navigate(
      ["login"]);
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

checkRePass(){
  if (this.registerForm.get('password')?.value===this.registerForm.get('rePassword')?.value) {
  } else {
    this.registerForm.get('rePassword')?.setErrors({'notMatch':true})
  }
  console.log(this.registerForm.get('rePassword'));
}
}
