import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/interfaces/product'

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  allProducts :Product[] = [];
  searchKey:string=''
  constructor(private _ProductsService:ProductsService){}
ngOnInit(): void {
  this.getAllProducts()
}
  getAllProducts(){
    this._ProductsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.allProducts=res.data
        console.log(this.allProducts);
        
      }
    })
  }

}
