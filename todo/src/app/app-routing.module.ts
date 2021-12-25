import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"product",component:ProductComponent},
{path:"customer",component:CustomerComponent},
{path:"about",component:AboutComponent},
{path:"**",component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
