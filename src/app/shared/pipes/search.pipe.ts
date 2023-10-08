import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchKey: string): Product[] {
    return products.filter((el)=>el.title.toLowerCase().includes(searchKey.toLowerCase()))
  }

}
