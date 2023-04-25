import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEndAngular';
  
  
  
  public products:Array<any>=[];
    http: any;
  
  
  constructor(private productService:ProductsService){
      this.productService.getProducts().subscribe((resp:any)=>{
          console.log(resp);
          this.products=resp;
          });
  }
  
  
}
