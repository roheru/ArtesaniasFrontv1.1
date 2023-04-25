import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ModalWindowComponent } from '../components/modal-window/modal-window.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    
    //= new URLSearchParams();
  constructor(private http:HttpClient) { 
    console.log('Servicio Persona prueba');
  }
  
  getProducts(filter?:any){
    let header=new HttpHeaders().set('Type-content','aplication/json')
    let params: URLSearchParams = new URLSearchParams(filter);
    let _url=`http://localhost:8080/products${(filter)?`?${params}`:``}`;
    console.dir(_url)
    return this.http.get(_url,{headers:header});
  }
  
  
  getComments(w?:ModalWindowComponent){
    let header=new HttpHeaders().set('Type-content','aplication/json')
    //let params: URLSearchParams = new URLSearchParams(filter);
    console.dir(w);
    //console.dir(w.code);
    let _url=`http://localhost:8080/comments?atributo=0`;
    console.dir(_url)
    return this.http.get(_url,{headers:header});
  }
  
}
