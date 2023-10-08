import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './auth.guard';
import { logedAuthGuard } from './loged-auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {path:"",redirectTo:"home" ,pathMatch:'full'},
  {path:"home",canActivate:[authGuard],component:HomeComponent , title:"Home"},
  // {path:"cart",canActivate:[authGuard],component:CartComponent, title:"Cart"},
  {path:"categories",canActivate:[authGuard],component:AllCategoriesComponent , title:"Categories"},
  {path:"wishList",canActivate:[authGuard],component:WishListComponent , title:"wishList"},
  {path:"products",canActivate:[authGuard],component:FeaturedProductsComponent , title:"Products"},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent , title:"Brands"},
  {path:"forgotPassword", component:ForgotPasswordComponent , title:"forgotPassword"},
  {path:"productDetails/:id",canActivate:[authGuard],component:ProductDetailsComponent , title:"productDetails"},
  {path:"checkout/:cartId",canActivate:[authGuard],component:CheckoutComponent , title:"CheckOut"},
  {path:"allorders",canActivate:[authGuard],component:AllOrdersComponent},
  {path:"register",canActivate:[logedAuthGuard],component:RegisterComponent , title:"Register"},
  {path:"login",component:LoginComponent , title:"Login"},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  
  
  {path:"**",component:NotfoundComponent , title:"NotFound"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
