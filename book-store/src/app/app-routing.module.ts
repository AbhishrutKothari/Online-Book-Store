import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetAllBooksComponent } from './get-all-books/get-all-books.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { LoginComponent } from './login/login.component';
import { SearchBookByIdComponent } from './search-book-by-id/search-book-by-id.component';
import { SearchCustomerByIdComponent } from './search-customer-by-id/search-customer-by-id.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:"admin/dashboard",component:AdminDashboardComponent},
{path:"admin/getAllBooks",component:GetAllBooksComponent},
{path:"admin/getAllCustomers",component:GetAllCustomersComponent},
{path:"admin/searchBooks",component:SearchBookByIdComponent},
{path:"admin/searchCustomers",component:SearchCustomerByIdComponent},
{path:"admin/addBooks",component:AddBooksComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"",redirectTo:"login",pathMatch:"full"}
{path:"dashboard",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
