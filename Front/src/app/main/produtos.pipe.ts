import { Pipe, PipeTransform } from '@angular/core';
import { ProductData } from './../product-data';

@Pipe({
  name: 'filterByCategoria'
})
export class FilterByCategoriaPipe implements PipeTransform {

  transform(produtos: ProductData[], categoria: number): ProductData[] {
    return produtos.filter(produto => produto.categoria === categoria);
  }

}
