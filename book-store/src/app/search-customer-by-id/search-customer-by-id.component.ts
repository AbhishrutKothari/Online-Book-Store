import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-customer-by-id',
  templateUrl: './search-customer-by-id.component.html',
  styleUrls: ['./search-customer-by-id.component.css']
})
export class SearchCustomerByIdComponent implements OnInit {
  users: Array<Users> = [];
  searchedKeyword: string = "";
  constructor(public us: UsersService) { }

  ngOnInit(): void {
  }
  loadData() {
    this.us.getAllUsers().subscribe(result => this.users = result,
      error => console.log(error))


  }

}
