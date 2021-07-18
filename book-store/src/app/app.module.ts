import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GetAllBooksComponent } from './get-all-books/get-all-books.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { SearchBookByIdComponent } from './search-book-by-id/search-book-by-id.component';
import { SearchCustomerByIdComponent } from './search-customer-by-id/search-customer-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBooksComponent } from './add-books/add-books.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminDashboardComponent,
    GetAllBooksComponent,
    GetAllCustomersComponent,
    SearchBookByIdComponent,
    SearchCustomerByIdComponent,
    AddBooksComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
