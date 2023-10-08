import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Category } from '../shared/interfaces/category';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit{

  allCategories:Category[]=[]

constructor(private _productsService:ProductsService){}
  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
this._productsService.getCategories().subscribe({
  next:(res)=>{
    console.log(res);
    this.allCategories= res.data
    console.log(this.allCategories);
    
  }
})
  }
}
