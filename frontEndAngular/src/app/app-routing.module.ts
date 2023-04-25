import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { GeoMapsComponent } from './components/geo-maps/geo-maps.component';
import { SellingProductComponent } from './components/selling-product/selling-product.component';

const routes: Routes = [
{path:'saveProduct',component:FormProductComponent},
{path:'listProducts',component:TableListComponent},
{path:'geoMap',component:GeoMapsComponent},
{path:'sellProducts',component:SellingProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
