import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit{
    
    title: string | null = null;
    code:  number| null = null;
    formg:FormGroup;
    public comments:Array<any>=[];
    
    
    formulario={
        comentario:""
        };
    formularioEnvio?=new FormData();
    
    constructor(private productService:ProductsService,public modalRef: MdbModalRef<ModalWindowComponent>,private fb:FormBuilder,private http:HttpClient) {
        /*console.log('imprimo el cosntructor del modal');
        console.log(this.code);
        console.log(this.title);
        console.dir(modalRef)
        console.dir(this)
        console.dir(this.code)*/
        
        this.productService.getComments(this).subscribe((resp:any)=>{
          this.comments=resp;
          });
    
    }
    
    ngOnInit(): void {
        this.formg=this.fb.group({
            comentario:['',[Validators.required]]
        });
    }
    
    guardarComentario(){
        console.log("guardo")
        console.log(this.formulario.comentario);
        
        var now = new Date();
        var timestamp = now.toISOString(); //or whatever format you want.

        
        this.formularioEnvio.append("comentario",this.formulario.comentario);
        this.formularioEnvio.append("codigoean",this.code.toString());
        this.formularioEnvio.append("fechacreacion",timestamp);
        
        console.dir(this.formularioEnvio)
        this.http.post('http://localhost:8080/comments/saveComment',this.formularioEnvio)
        .subscribe({
            next:(response)=>console.log(response),
            error:(error)=>console.log(error)
            }
        );
        
    }
}
