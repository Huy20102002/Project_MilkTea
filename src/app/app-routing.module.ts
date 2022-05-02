import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './screen/about/about.component';
import { AdminlayoutComponent } from './screen/admin/adminlayout/adminlayout.component';
import { AddCateComponent } from './screen/admin/category/add-cate/add-cate.component';
import { CategoryComponent } from './screen/admin/category/category.component';
import { EditCategoryComponent } from './screen/admin/category/edit-category/edit-category.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
import { AddproductsComponent } from './screen/admin/product/addproducts/addproducts.component';
import { EditproductsComponent } from './screen/admin/product/editproducts/editproducts.component';
import { CartComponent } from './screen/cart/cart.component';
import { HomeComponent } from './screen/home/home.component';
import { HomelayoutComponent } from './screen/homelayout/homelayout.component';
import { LoginComponent } from './screen/login/login.component';
import { NewsComponent } from './screen/news/news.component';
import { ProductDetailsComponent } from './screen/product-details/product-details.component';
import { ProductComponent } from './screen/product/product.component';
import { ProfileComponent } from './screen/profile/profile.component';
import { RegisterComponent } from './screen/register/register.component';
import { ProductAdminComponent } from './screen/admin/product/product.component';
import { NotfoundComponent } from './screen/notfound/notfound.component';
const routes: Routes = [
  {
    path: "", component: HomelayoutComponent, children: [
      {
        path: "",component: HomeComponent
      },
      {
        path: "sanpham",component: ProductComponent
      },
      
      {
        path: "sanpham/chitiet/:id",component: ProductDetailsComponent
      },
      {
        path:"gioithieu",component: AboutComponent
      },
      {
        path: "tintuc",component: NewsComponent
      },
      {
        path:"giohang",component: CartComponent
      },
      {
        path: "canhan",component:ProfileComponent
      }
    ]
  },
  {
    path: "account-login",component:LoginComponent
  },
  {
    path: "account-register",component: RegisterComponent
  },
  {
    path: "admin",component:AdminlayoutComponent,children: [
      {
        path: "",component: DashboardComponent
      },
      {
        path: "danhmuc",component:CategoryComponent
      },
      {
        path: "danhmuc/add",component: AddCateComponent
      },
      {
        path:"danhmuc/edit/:id",component: EditCategoryComponent
      },
      {
        path: "sanpham",component:ProductAdminComponent 
      },
      {
        path: "sanpham/add",component: AddproductsComponent
      },
      {
        path: "sanpham/edit/:id",component: EditproductsComponent
      }
    ]
  },
  {
    path: "**",component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
