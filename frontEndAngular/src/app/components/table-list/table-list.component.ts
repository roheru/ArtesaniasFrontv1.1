import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {HttpClient} from '@angular/common/http';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
    
    modalRef: MdbModalRef<ModalWindowComponent> | null = null;
    
    title = 'frontEndAngular';
  public products:Array<any>=[];
  
  private formulario:any={
      atributo:"ean",
      valor:""
   };
   
   http:HttpClient;
  
  constructor(private productService:ProductsService,private modalService: MdbModalService){
      this.productService.getProducts().subscribe((resp:any)=>{
          this.products=resp;
          });
  }
  
   openModal(code:number) {
    console.log(code);
    this.modalRef = this.modalService.open(ModalWindowComponent, {
      data: { title: 'Custom title',code:code },
    });
  }
  
  buscar(){
      this.productService.getProducts(this.formulario).subscribe((resp:any)=>{
          console.log(resp);
          this.products=resp;
          });
      }
  
  onInputChange(event){
      this.formulario={
            ...this.formulario,
            [event.target.name]:event.target.value
          };
      
  }
}
