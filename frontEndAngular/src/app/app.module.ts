import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormProductComponent } from './components/form-product/form-product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { GeoMapsComponent } from './components/geo-maps/geo-maps.component';
import { SellingProductComponent } from './components/selling-product/selling-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProductComponent,
    PagenotfoundComponent,
    TableListComponent,
    ModalWindowComponent,
    GeoMapsComponent,
    SellingProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
