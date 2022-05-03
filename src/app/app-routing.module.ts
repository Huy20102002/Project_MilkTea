import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './screen/about/about.component';
import { AdminlayoutComponent } from './screen/admin/adminlayout/adminlayout.component';
import { AddCateComponent } from './screen/admin/category/add-cate/add-cate.component';
import { CategoryComponent } from './screen/admin/category/category.component';
import { EditCategoryComponent } from './screen/admin/category/edit-category/edit-category.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
import { AddproductsComponent } from './screen/admin/product-admin/addproducts/addproducts.component';
import { EditproductsComponent } from './screen/admin/product-admin/editproducts/editproducts.component';
import { CartComponent } from './screen/cart/cart.component';
import { HomeComponent } from './screen/home/home.component';
import { HomelayoutComponent } from './screen/homelayout/homelayout.component';
import { LoginComponent } from './screen/login/login.component';
import { NewsComponent } from './screen/news/news.component';
import { ProductDetailsComponent } from './screen/product-details/product-details.component';
import { ProductComponent } from './screen/product/product.component';
import { ProfileComponent } from './screen/profile/profile.component';
import { RegisterComponent } from './screen/register/register.component';
import { NotfoundComponent } from './screen/notfound/notfound.component';
import { UserComponent } from './screen/admin/user/user.component';
import { CommentComponent } from './screen/admin/comment/comment.component';
import { SlideComponent } from './screen/admin/slide/slide.component';
import { SizeComponent } from './screen/admin/size/size.component';
import { ToppingComponent } from './screen/admin/topping/topping.component';
import { ProductAdminComponent } from './screen/admin/product-admin/product-admin.component';
import { OrderComponent } from './screen/admin/order/order.component';
import { OrderDetailsComponent } from './screen/admin/order-details/order-details.component';
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
        path: "donhang",component: OrderComponent
      },
      {
        path: "donhang/:id/chitiet",component: OrderDetailsComponent
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
      },
      {
        path: "taikhoan",component: UserComponent
      },
      {
        path:"binhluan",component:CommentComponent
      },
      {
        path: "slide",component: SlideComponent
      },
      {
        path: "size",component: SizeComponent
      },
      {
        path: "topping",component:ToppingComponent
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
