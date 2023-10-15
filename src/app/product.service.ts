import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [
    { No: 1, code:1, name: 'Product 1', version: 10.99 ,action:'payed'},
    { No: 2, code:2, name: 'Product 2', version: 19.99 ,action:'payed'},
    { No: 3, code:3, name: 'Product 3', version: 7.49 ,action:'payed'},
    // Add more sample products as needed
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);
  }
}
