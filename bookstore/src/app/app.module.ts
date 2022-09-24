import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { RestapiService } from './services/restapi.service';
import { AdminloginComponent } from './Login/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './home/adminhome/adminhome.component';
import { UserhomeComponent } from './home/userhome/userhome.component';
import { ViewcategoryComponent } from './Category/viewcategory/viewcategory.component';
import { ViewbookComponent } from './Book/viewbook/viewbook.component';
import { AddbookComponent } from './Book/addbook/addbook.component';
import { AddcategoryComponent } from './Category/addcategory/addcategory.component';
import { UserloginComponent } from './Login/userlogin/userlogin.component';
import { ViewcustomerComponent } from './Customer/viewcustomer/viewcustomer.component';
import { AddcustomerComponent } from './Customer/addcustomer/addcustomer.component';
import { VieworderComponent } from './Orders/vieworder/vieworder.component';
import { UpdatecategoryComponent } from './Category/updatecategory/updatecategory.component';
import { ViewaddressComponent } from './Address/viewaddress/viewaddress.component';
import { UpdatebookComponent } from './Book/updatebook/updatebook.component';
// import { ReviewComponent } from './Review/Review.component';
import { ViewreviewComponent } from './Review/viewreview/viewreview.component';
import { CustomerorderComponent } from './Customer/Order/customerorder/customerorder.component';
import { CustomerprofileComponent } from './Customer/Profile/customerprofile/customerprofile.component';
import { BuybookComponent } from './Customer_Component/buybook/buybook.component';
import { ViewbookcustomerComponent } from './Customer_Component/viewbookcustomer/viewbookcustomer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    UserhomeComponent,
    ViewcategoryComponent,
    ViewbookComponent,
    AddbookComponent,
    AddcategoryComponent,
    UserloginComponent,
    ViewcustomerComponent,
    AddcustomerComponent,
    VieworderComponent,
    UpdatecategoryComponent,
    ViewaddressComponent,
    UpdatebookComponent,
   
    ViewreviewComponent,
        CustomerorderComponent,
        CustomerprofileComponent,
        BuybookComponent,
        ViewbookcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestapiService,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
