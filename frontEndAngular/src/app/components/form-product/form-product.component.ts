import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{
    
    fileName='';
    
    formulario={
        codigoean:"",
        nombre:"",
        marca:"",
        descripcion:"",
        cantidad:"",
        file_data:""
        };
    formularioEnvio?=new FormData();
    
    formg:FormGroup;
    fileToUpload:File=null;
    
    //guestForm?: FormGroup;
    
    constructor(private fb:FormBuilder,private http:HttpClient){
    
    }
    
    ngOnInit(): void {
        this.formg=this.fb.group({
            codigoean:['',[Validators.required]],
            nombre:['',[Validators.required]],
            marca:['',[Validators.required]],
            descripcion:['',[Validators.required]],
            cantidad:['',[Validators.required]],
            file_data:[null,[Validators.required]]         
        });
    }
    
    send():any{
        console.log(this.formg?.value);
    }
    
    mifuncion(){
        
        /*console.log(`codigo ${this.formulario.codigoean}`);
        console.log(`nombre ${this.formulario.nombre}`);
        console.log(`marca ${this.formulario.marca}`);
        console.log(`descripcion ${this.formulario.descripcion}`);
        console.log(`cantidad ${this.formulario.cantidad}`);*/
        this.formularioEnvio.append("codigoean",this.formulario.codigoean);
        this.formularioEnvio.append("nombre",this.formulario.nombre);
        this.formularioEnvio.append("marca",this.formulario.marca);
        this.formularioEnvio.append("descripcion",this.formulario.descripcion);
        this.formularioEnvio.append("cantidad",this.formulario.cantidad);
        
        console.dir(this.formularioEnvio)
        console.dir(this.formularioEnvio.get("file_data"));
        console.dir(this.formularioEnvio.get("codigoean"));
        console.dir(this.formularioEnvio.get("nombre"));
        console.dir(this.formularioEnvio.get("descripcion"));
        
        this.http.post('http://localhost:8080/products/saveproduct',this.formularioEnvio)
        .subscribe({
            next:(response)=>console.log(response),
            error:(error)=>console.log(error)
            }
        );
    }
    
    onFileSelect(event){
        const file:File=event.target.files[0];
        console.log(file)
        this.formularioEnvio.append("file_data",file);
        console.dir(this.formularioEnvio)
        if(event.target.files[0]){
            
        }
        
        
    }
    
}


