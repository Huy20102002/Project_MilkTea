import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelayoutComponent } from './screen/homelayout/homelayout.component';
import { HomeComponent } from './screen/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './screen/product/product.component';
import { AboutComponent } from './screen/about/about.component';
import { NewsComponent } from './screen/news/news.component';
import { LoginComponent } from './screen/login/login.component';
import { RegisterComponent } from './screen/register/register.component';
import { ProductDetailsComponent } from './screen/product-details/product-details.component';
import { CartComponent } from './screen/cart/cart.component';
import { ProfileComponent } from './screen/profile/profile.component';
import { AdminlayoutComponent } from './screen/admin/adminlayout/adminlayout.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
import { UserComponent } from './screen/admin/user/user.component';
import { CategoryComponent } from './screen/admin/category/category.component';
import { AddCateComponent } from './screen/admin/category/add-cate/add-cate.component';
import { EditCategoryComponent } from './screen/admin/category/edit-category/edit-category.component';
import { EditproductsComponent } from './screen/admin/product/editproducts/editproducts.component';
import { AddproductsComponent } from './screen/admin/product/addproducts/addproducts.component';
import { AddNewsComponent } from './screen/admin/news/add-news/add-news.component';
import { EditNewsComponent } from './screen/admin/news/edit-news/edit-news.component';
import { AddUserComponent } from './screen/admin/user/add-user/add-user.component';
import { EditUserComponent } from './screen/admin/user/edit-user/edit-user.component';
import { NotfoundComponent } from './screen/notfound/notfound.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SizeComponent } from './screen/admin/size/size.component';
import { ToppingComponent } from './screen/admin/topping/topping.component';
import { SlideComponent } from './screen/admin/slide/slide.component';
import { VoucherComponent } from './screen/admin/voucher/voucher.component';
import { CommentComponent } from './screen/admin/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AboutComponent,
    NewsComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    CartComponent,
    ProfileComponent,
    AdminlayoutComponent,
    DashboardComponent,
    UserComponent,
    CategoryComponent,
    AddCateComponent,
    EditCategoryComponent,
    EditproductsComponent,
    AddproductsComponent,
    AddNewsComponent,
    EditNewsComponent,
    AddUserComponent,
    EditUserComponent,
    NotfoundComponent,
    SizeComponent,
    ToppingComponent,
    SlideComponent,
    VoucherComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IvyCarouselModule,
    IonicModule.forRoot(),
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
