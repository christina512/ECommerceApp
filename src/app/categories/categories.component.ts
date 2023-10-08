import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Category } from '../shared/interfaces/category';
import { OwlOptions} from 'ngx-owl-carousel-o/lib/models/owl-options.model'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:10,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  allcategories:Category[]=[]
constructor(private _productsService : ProductsService){}

ngOnInit(): void {
 this.getCategories()
}

getCategories(){
  this._productsService.getCategories().subscribe({
    next:(res)=>{
      
      this.allcategories=res.data
      console.log(this.allcategories);
      
    }
  })
}

}
