import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './Login/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './home/adminhome/adminhome.component';
import { UserhomeComponent } from './home/userhome/userhome.component';
import { ViewcategoryComponent } from './Category/viewcategory/viewcategory.component';
import { ViewbookComponent } from './Book/viewbook/viewbook.component';
import { AddbookComponent } from './Book/addbook/addbook.component';
import { AddcategoryComponent } from './Category/addcategory/addcategory.component';
import { UserloginComponent } from './Login/userlogin/userlogin.component';
import { ViewcustomerComponent } from './Customer/viewcustomer/viewcustomer.component';
import { VieworderComponent } from './Orders/vieworder/vieworder.component';
import { UpdatecategoryComponent } from './Category/updatecategory/updatecategory.component';
import { ViewaddressComponent } from './Address/viewaddress/viewaddress.component';
import { AuthGuard } from './services/auth.guard';
import { UpdatebookComponent } from './Book/updatebook/updatebook.component';
import { ViewbookcustomerComponent } from './Customer_Component/viewbookcustomer/viewbookcustomer.component';
import { ViewreviewComponent } from './Review/viewreview/viewreview.component';
import { CustomerorderComponent } from './Customer/Order/customerorder/customerorder.component';
import { CustomerprofileComponent } from './Customer/Profile/customerprofile/customerprofile.component';
import { BuybookComponent } from './Customer_Component/buybook/buybook.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AdminloginComponent,
    pathMatch: 'full',
  },
  {
    path: 'userlogin',
    component: UserloginComponent,
    pathMatch: 'full',
  },
  {
    path: 'adminhome',
    component: AdminhomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'userhome',
    component: UserhomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewcategory',
    component: ViewcategoryComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'viewbook',
    component: ViewbookComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'addbook',
    component: AddbookComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'addcategory',
    component: AddcategoryComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'userhome',
    component: UserhomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'userlogin',
    component: UserloginComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'viewcustomer',
    component: ViewcustomerComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'vieworder',
    component: VieworderComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'viewcategory/category/update/:id',
    component: UpdatecategoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewaddress',
    component: ViewaddressComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'viewbook/book/update/:id',
    component: UpdatebookComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'viewreview',
    component: ViewreviewComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'viewbookcustomer',
    component: ViewbookcustomerComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'viewbookcustomer/book/buy/:id',
    component: BuybookComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'customerorder',
    component: CustomerorderComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'customerprofile',
    component: CustomerprofileComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
