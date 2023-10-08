import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Brands } from '../shared/interfaces/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
allBrands:Brands[]=[]

constructor(private _productsService:ProductsService){

}
ngOnInit(): void {
  this.getBrands()
}

  getBrands(){
this._productsService.getBrands().subscribe({
  next:(res)=>{
    console.log(res);
    this.allBrands=res.data
    console.log(this.allBrands);
    
    
  }
})
  }
}
